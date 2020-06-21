import searchTerms from './search-terms.js';
import api from './api.js';

function onButtonClick() {
  $('.loot-section').on('click', '.js-open-button', function () {
    const itemQuery = chooseItemQuery();
    console.log(`Item query: ${itemQuery}`);

    //start animation and remove open button
    render(loadingTemplate());
    api.getItems(itemQuery)//use api to get a list of 40 items
      .then((items) => {
        // let tempItems = items;

        // const vintageItems = tempItems.filter(item => item.is_vintage === true)

        // let item = {};
        // if (vintageItems.length > 0) {
        //   item = vintageItems[Math.floor(Math.random() * vintageItems.length)];
        // } else {
        //   item = items[Math.floor(Math.random() * items.length)];
        // }

        const item = items[Math.floor(Math.random() * items.length)];

        buildItem(item); //build html including item stats and image
        //stop animation and display open button
      });
  });
}

//need ot build in that if the search comes back empty it researches

function chooseItemQuery() {
  const rarityModifier = generateRarityModifier();
  let materialScore = generateScore(rarityModifier);

  const categorySelect = getRandomInt(0, Object.keys(searchTerms.collection).length - 1);
  const materialSelect = generateRarity(materialScore, rarityModifier);

  let category = Object.keys(searchTerms.collection)[categorySelect];
  if (category != 'Weapons' || category != 'Armor') {
    const roll = Math.random() * 12;
    category = roll <= 4 ? 'Weapon' :
      roll >= 11 ? 'Jewelry' :
        roll >= 6 ? 'Armor' : category
  }

  const materialsLength = searchTerms.collection[category]['materials'][materialSelect].length - 1;
  const subcategoriesLength = searchTerms.collection[category]['subCategories'].length - 1;

  const itemName = searchTerms.collection[category]['subCategories'][getRandomInt(0, subcategoriesLength)];
  const material = searchTerms.collection[category]['materials'][materialSelect][getRandomInt(0, materialsLength)];

  return `${itemName} ${material}`
}

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}

function buildItem(item) {

  //determine itemName
  //the replace and split combo is cutting the string off at the first '\s'(space) after 30 characters
  let itemName = item.title.replace(/.{25}\S*\s+/g, "$&@").split(/\s+@/)[0];
  itemName = titleCase(itemName);
  itemName = itemName.replace(/Ethnic|For|Free|By/gi, "")

  //determine materials
  let materials = '';
  if (item.materials.length == 0) {
    materials = 'N/A';
  } else if (item.materials.length == 1) {
    materials = item.materials[0];
  } else {
    materials = item.materials.join(", ");
  }

  materials = materials.replace(/.{100}\S*\s+/g, "$&@").split(/\s+@/)[0];

  //determine category
  const category = item.taxonomy_path[item.taxonomy_path.length - 1];
  //determine url
  const url = item.url;
  //determine score
  let score = Math.ceil((item.price / 10) * (item.price / 10));

  //determine description
  //need to make the description cut off at the period after 200 chars
  let description = item.description.replace(/.{100}\S*\s+/g, "$&@").split(/\s+@/)[0];
  description = description.replace(/Ethnic|For|Free|By|Shipping/gi, "")

  console.log(item);
  console.log(item.listing_id);

  api.getImage(item.listing_id) //determine image
    .then((img) => {
      display(img, itemName, category, materials, score, description, url);
    });
}

function render(content) {
  $('.loot-section').html(content);
}

function loadInitialView() {
  render(initialViewTemplate());
}

function display(image, itemName, category, materials, score, description, url) {
  const itemHtml = itemTemplate(image, itemName, category, materials, score, description, url)
  render(itemHtml);
}

//add 'of ${suffix}' to the end of You found line
function itemTemplate(image, itemName, category, materials, score, description, url) {
  //potentially add Description: <br> ${description} <br> back in after figuring out how to format
  //or write a description using key words

  return `
    <img src="${image}" alt="${itemName}"><br>
    <p>You found ${itemName} <br><br>
      Category: ${category} <br>
      Materials: ${materials}  <br>
      Overall Rating: ${score} <br>
    </p>
    <form action="${url}" target="_blank">
      <input class="button-style" type="submit" value="More Info" />
    </form>
    <div>
      <button class="button-style js-open-button" type="button">Open Another</button>
    </div>
  `;
}

function initialViewTemplate() {
  return `
    <div>
      <img src="https://pngimg.com/uploads/treasure_chest/treasure_chest_PNG76.png" alt="Chest Pic">
    </div>
    <div>
      <button class="button-style js-open-button" type="button">Open</button>
    </div>
  `;
}

function loadingTemplate() {
  return '<p>Opening...</p>'
}

function generateScore(mod) {
  let score = getRandomInt(0, 1000);
  score += mod;

  score = (score < mod * 1.5) ? score + mod + 300 : score;
  score = (score > 1000) ? 1000 : score;

  return score;
}

function generateRarity(score, mod) {
  let rarity = 1;

  if (score < 499)
    rarity = 1;
  else if (score >= 500 && score <= 699)
    rarity = 2;
  else if (score >= 700 && score <= 799)
    rarity = 3;
  else if (score >= 800 && score <= 859)
    rarity = 4;
  else if (score >= 860 && score <= 899)
    rarity = 5;
  else if (score >= 900 && score <= 934)
    rarity = 6;
  else if (score >= 935 && score <= 969)
    rarity = 7;
  else if (score >= 970 && score <= 984)
    rarity = 8;
  else if (score >= 985 && score <= 994)
    rarity = 9;
  else if (score >= 995 && score <= 1000)
    rarity = 10;

  rarity = (rarity < (mod / 100) * 1.6) ? rarity += 3 : rarity;
  rarity = (rarity > 10) ? 10 : rarity;

  return rarity;
}

function generateRarityModifier() {
  const seed = getRandomInt(0, 1000);
  let mod =
    (seed < 899) ? 0 :
      (seed > 900 && seed < 939) ? 100 :
        (seed > 940 && seed < 969) ? 200 :
          (seed > 970 && seed < 989) ? 300 : 400;

  return mod;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pageHandler() {
  onButtonClick();
  loadInitialView();
}

export default {
  pageHandler
};
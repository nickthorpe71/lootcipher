import data from './data.js';
import api from './api.js';

function onButtonClick() {
  $('button').click(function () {
    //$('.loot-section').html(buildItem());
    let results = [];

    //useful properties: 
    //url, 
    //title, 
    //description, 
    //who_made, 
    //when_made, 
    //materials, < an array of materials
    //price,
    //tags, < another array of keywords
    //taxonomy_path[] < basically an array of key words

    api.getItems('Statue of a Bird', '40')
      .then((items) => {
        results = items;

        console.log(results[Math.floor(Math.random() * 40)]);
      });

    //call chooseItemType to set search term
    //use api.getItems to get a list of 40 items
    //choose one randomly
    //feed that info into buildItem
    ////build item should return an image and text below it
    //render the item on the screen


  });
}

function buildItem() {

  const rarityModifier = generateRarityModifier();

  const conditionScore = generateScore(rarityModifier);
  const enchantmentScore = generateScore(rarityModifier);
  let makerScore = generateScore(rarityModifier);
  let materialScore = generateScore(rarityModifier);

  const categorySelect = getRandomInt(0, Object.keys(data.collection).length - 1);

  const conditionSelect = generateRarity(conditionScore, rarityModifier);
  const enchantmentSelect = generateRarity(enchantmentScore, rarityModifier);
  const makerSelect = generateRarity(makerScore, rarityModifier);
  const materialSelect = generateRarity(materialScore, rarityModifier);

  let conditionMod = conditionScore;
  let makerMod = (makerScore < 500) ? 100 : makerScore;
  let materialMod = (materialScore > 935) ? materialScore * 1.5 : materialScore;

  const category = Object.keys(data.collection)[categorySelect];
  //const category = 'Gem';

  if (category === 'Gem') {
    makerScore = 1000;
    materialMod * 2;
  }

  if (category === 'Wine' || category === 'Painting') {
    materialMod = 0;
    makerMod * 2;
  }

  let totalScore = (1000 - conditionMod) * -1 + enchantmentScore + makerMod + materialMod + (enchantmentSelect * 100) + (makerSelect * 100) + (materialSelect * 100);
  totalScore = (totalScore < 0) ? 0 : totalScore;

  const materialsLength = data.collection[category]['materials'][materialSelect].length - 1;
  const enchantmentsLength = data.collection[category]['enchantments'][enchantmentSelect].length - 1;
  const makersLength = data.collection[category]['makers'][makerSelect].length - 1;
  const conditionsLength = data.collection[category]['conditions'][conditionSelect].length - 1;
  const subcategoriesLength = data.collection[category]['subCategories'].length - 1;

  const itemName = data.collection[category]['subCategories'][getRandomInt(0, subcategoriesLength)];
  const material = data.collection[category]['materials'][materialSelect][getRandomInt(0, materialsLength)];
  const enchantment = data.collection[category]['enchantments'][enchantmentSelect][getRandomInt(0, enchantmentsLength)];
  const maker = data.collection[category]['makers'][makerSelect][getRandomInt(0, makersLength)];
  const condition = data.collection[category]['conditions'][conditionSelect][getRandomInt(0, conditionsLength)];

  return lootTemplate(itemName, enchantment, material, category, maker, condition, totalScore);
}

function lootTemplate(itemName, enchantment, material, category, maker, condition, score) {
  return `
    <p>You found ${enchantment} ${material} ${itemName} <br>
      Category: ${category} <br>
      Maker: ${maker} <br>
      Condition: ${condition} <br>
      Overall Rating: ${score} <br>
    </p>
  `;
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
}

export default {
  pageHandler
};
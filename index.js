import data from './data.js';

function onButtonClick() {
  $('button').click(function () {
    $('.loot-section').html(buildItem());
  });
}

function buildItem() {

  const conditionScore = getRandomInt(0, 1000);
  const enchantmentScore = getRandomInt(0, 1000);
  const makerScore = getRandomInt(0, 1000);
  const materialScore = getRandomInt(0, 1000);

  const categorySelect = getRandomInt(0, Object.keys(data.collection).length - 1);

  const conditionSelect = generateRarity(conditionScore);
  const enchantmentSelect = generateRarity(enchantmentScore);
  const makerSelect = generateRarity(makerScore);
  const materialSelect = generateRarity(materialScore);

  let makerMod = (makerScore < 500) ? 100 : makerScore;
  let materialMod = (materialScore > 900) ? materialScore * 1.5 : materialScore;

  let totalScore = (1000 - conditionScore) * -1 + enchantmentScore + makerMod * 1.25 + materialMod;

  const category = Object.keys(data.collection)[categorySelect];
  //const category = 'Weapon';

  if (category === 'Gem')
    totalScore += 300;

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

function generateRarity(score) {
  let rarity = 0;

  if (score < 499)
    rarity = 1;
  if (score > 500 && score < 699)
    rarity = 2;
  if (score > 700 && score < 799)
    rarity = 3;
  if (score > 800 && score < 859)
    rarity = 4;
  if (score > 860 && score < 899)
    rarity = 5;
  if (score > 900 && score < 934)
    rarity = 6;
  if (score > 935 && score < 969)
    rarity = 7;
  if (score > 970 && score < 984)
    rarity = 8;
  if (score > 985 && score < 994)
    rarity = 9;
  if (score > 995 && score < 100)
    rarity = 10;

  return rarity;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pageHandler() {
  onButtonClick();
}

$(pageHandler);
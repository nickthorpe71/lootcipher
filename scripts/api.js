
function getItems(query, maxEntries) {
  return fetch(buildUrl(query, maxEntries), {
    headers: { 'Origin': 'X-Requested-With' }
  })
    .then(res => res.json())
    .then(data => data.results)
}

function buildUrl(keyWordList) {
  // const proxy = 'https://cors-anywhere.herokuapp.com/'
  const baseUrl = 'https://openapi.etsy.com/v2/listings/active?';
  const apiKey = 'api_key=mrbs8unvfytnn60kudfot6re'
  const keyWords = `keywords=${keyWordList}`;
  const limit = `limit=${40}`;
  const minPrice = `min_price=${30}`;

  const url =
    `${baseUrl}${apiKey}&${keyWords}&${limit}&${minPrice}`;

  return url;
}

export default {
  getItems
};
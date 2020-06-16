function getItems(query, maxEntries) {
  fetch(buildUrl(query, maxEntries))
    .then(res => res.json())
    .then(data => data);
}

function buildUrl(query, maxEntries) {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const baseUrl = 'https://open.api.ebay.com/shopping?';
  const callName = 'callname=FindProducts';
  const responseencoding = 'responseencoding=XML';
  const appId = 'appid=NickThor-Lootciph-PRD-72eb49443-ab4147db';
  const siteId = 'siteid=0';
  const version = 'version=967';
  const queryWords = `QueryKeywords=${query}`;
  const maxEnts = `MaxEntries=${maxEntries}`;

  const url =
    `${proxyurl}${baseUrl}&${callName}&${responseencoding}&${appId}&
  ${siteId}&${version}&${queryWords}&${maxEnts}`;

  return url;
}

export default {
  getItems
};
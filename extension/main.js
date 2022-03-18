const PAGE_STATUS = 'complete';
const ACCESS_KEY_STORAGE_NAME = 'traffic-counter-ext-api-key'
const ACCESS_KEY = null


const updateAccessKey = (result) => {
  if (result) ACCESS_KEY = result.value;
}

const getVisitedPageURL = (tabId, { status }) => {
  if (status !== PAGE_STATUS) return;
  
  chrome.tabs.get(tabId, function({id, url}){
    console.log(id, url);
  });
}

chrome.storage.sync.get(ACCESS_KEY_STORAGE_NAME, updateAccessKey)
if (ACCESS_KEY) {
  chrome.tabs.onUpdated.addListener(getVisitedPageURL)
} else {
  
}

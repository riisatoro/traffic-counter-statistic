const PAGE_STATUS = 'complete';
const ACCESS_KEY_STORAGE_NAME = 'traffic-counter-ext-api-key'

let ACCESS_KEY = null


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
}

let IS_AUTHENTICATED = false;


const listenAuthMessage = (request, sender, sendResponse) => {
  console.log(request.message)
  switch (request.message) {
    case 'isAuthenticated':
      sendResponse({ message: false });
    default:
      sendResponse({ message: 'unknown command' });
  }
  // if (request.message === 'login') {
  //   if (IS_AUTHENTICATED) console.log('ALREADY AUTHENTICATED');
  // } else if (request.message === 'logout') {
  //   console.log('LOGOUT')
  // }
}

chrome.runtime.onMessage.addListener(listenAuthMessage);

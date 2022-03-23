const PAGE_STATUS = 'complete';

const prepareSendTabInfo = (tabId, isRemoved = false) => {
  if (isRemoved) {
    console.log('removed', tabId);
    return;
  }

  chrome.tabs.get(tabId, function({ id, url }){
    console.log(id, url)
  });
}

const handleVisitedTab = (tabId, { status }) => {
  if (status !== PAGE_STATUS) return;
  prepareSendTabInfo(tabId);
}

const handleRemovedTab = (tabId) => {
  prepareSendTabInfo(tabId, isRemoved=true);
}

const listenAuthMessage = (request, sender, sendResponse) => {
  switch (request.message) {
    case 'login':
      sendResponse({ message: true })
      break;
    case 'logout':
      sendResponse({ message: false });
      break;
    case 'isAuthenticated':
      sendResponse({ message: false });
      break;
    default:
      sendResponse({ message: 'unknown command' });
      break;
  }
}

chrome.tabs.onUpdated.addListener(handleVisitedTab);
chrome.tabs.onRemoved.addListener(handleRemovedTab);

chrome.runtime.onMessage.addListener(listenAuthMessage);

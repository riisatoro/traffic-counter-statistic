const PAGE_STATUS = 'complete';

const getVisitedPageURL = (tabId, { status }) => {
  if (status !== PAGE_STATUS) return;
  
  chrome.tabs.get(tabId, function({id, url}){
    console.log(id, url);
  });
  
}

chrome.tabs.onUpdated.addListener(getVisitedPageURL)

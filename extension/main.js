const PAGE_STATUS = 'complete';

let ACCESS_TOKEN = null;
let GOOGLE_ACCESS_TOKEN = null;

const CLIENT_ID = encodeURIComponent('177128290409-cerm9ki6g5iod4jd69dhvotthqc6cb7u.apps.googleusercontent.com');
const RESPONSE_TYPE = encodeURIComponent('id_token');
const REDIRECT_URI = encodeURIComponent('https://jfikebnfghgianllcfgniieabmmdebdj.chromiumapp.org');
const STATE = encodeURIComponent('jfkls3n');
const SCOPE = encodeURIComponent('openid');
const PROMPT = encodeURIComponent('consent');

const createOAuthUrl = () => {
  const NONCE = encodeURIComponent(
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  );
  return (
    `https://accounts.google.com/o/oauth2/v2/auth`
    + `?client_id=${CLIENT_ID}`
    + `&response_type=${RESPONSE_TYPE}`
    + `&redirect_uri=${REDIRECT_URI}`
    + `&state=${STATE}`
    + `&scope=${SCOPE}`
    + `&prompt=${PROMPT}`
    + `&nonce=${NONCE}`
  )
}


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

const parseUrlToken = (url) => {
  return url.split('id_token=')[1].split('&')[0].split('.')[1];
}

const handleOAuth = (url, sendResponse) => {
  console.log(url.split('id_token=')[1].split('&')[0]);
  GOOGLE_ACCESS_TOKEN = parseUrlToken(url);
  console.log(GOOGLE_ACCESS_TOKEN)
  sendResponse({ message: true })
}

const listenAuthMessage = (request, sender, sendResponse) => {
  switch (request.message) {
    case 'login':
      chrome.identity.launchWebAuthFlow({
        url: createOAuthUrl(),
        interactive: true,
      }, 
      (response) => handleOAuth(response, sendResponse)
      )
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

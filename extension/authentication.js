let IS_AUTHENTICATED = false;

const handleAuthCheckMessage = (response) => {
    const { message } = response;
    IS_AUTHENTICATED = message === true;
    console.log(data);
}

const handleSingInClick = () => {
    chrome.runtime.sendMessage({ message: 'login' })
}

document.getElementById('sign-in-button').addEventListener('click', handleSingInClick)

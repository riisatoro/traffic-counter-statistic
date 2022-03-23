let IS_AUTHENTICATED = false;

// background worker response handlers

const handleAuthMessage = (response) => {
    IS_AUTHENTICATED = response.message === true;
    changePopupView();
}

// event handlers

const changePopupView = () => {
    if (IS_AUTHENTICATED) {
        document.getElementById('anonymous').classList.add('d-none');
        document.getElementById('authenticated').classList.remove('d-none');
    } else {
        document.getElementById('anonymous').classList.remove('d-none');
        document.getElementById('authenticated').classList.add('d-none');
    }
}

const handleSingInClick = () => {
    chrome.runtime.sendMessage({ message: 'login' }, handleAuthMessage);
}

const handleLogoutClick = () => {
    chrome.runtime.sendMessage({ message: 'logout' }, handleAuthMessage);
}

document.getElementById('sign-out-button').addEventListener('click', handleLogoutClick);
document.getElementById('sign-in-button').addEventListener('click', handleSingInClick);

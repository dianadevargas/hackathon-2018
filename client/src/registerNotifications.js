const applicationServerPublicKey = 'BI1qV9bQ5JGCzerdD4cjlGHOvAj6mstzeSNpEyulqCr_kwnRo1p8CpBTJMX2WCb1pYrHtGyLDfUpo4hRjA-bSiY';

function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

export default function registerNotifications() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

        navigator.serviceWorker.register(swUrl)
            .then(function(swReg) {
                console.log('Service Worker is registered', swReg);
                subscribeUser(swReg);
            })
            .catch(function(error) {
                console.error('Service Worker Error', error);
            });
    } else {
        console.warn('Push messaging is not supported');
    }
}

function subscribeUser(swReg) {
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
    swReg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
    })
        .then(function(subscription) {
            console.log('User is subscribed.');
            updateSubscriptionOnServer(subscription);
        })
        .catch(function(err) {
            console.log('Failed to subscribe the user: ', err);
        });
}

function updateSubscriptionOnServer(subscription) {
    // TODO: Send subscription to application server
    console.log(JSON.stringify(subscription));
}

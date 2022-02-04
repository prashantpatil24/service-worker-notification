const publicVapidKey = 'BL45R9oTyuOJ7SWImxwH4rjO_YqK2NWaVEPm5_sMjetR5xIiKZVETA1YuErc-qIer1WBlcz96b5njgz1pQ1htgg';

//check for service worker support current browser
if ("serviceWorker" in navigator) {
    send().catch(err => console.error(err));
}

// Register SW, Register Push, Send Push
async function send() {

    //register SW
    console.log('1. registering service worker...');
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/'  //worker apply url current is homepage
    });

    //register Push
    console.log('2. registering push...');
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });

    //send push notification to backend index.js file
    console.log('3. sending push...');
    await fetch("/subscribe", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
            "content-type": "application/json"
        }
    });
}

//convert url to safe base64 string
function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, "+")
        .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

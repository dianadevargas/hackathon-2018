const webpush = require('web-push');

const subscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fVgCEQF_LQs:APA91bEerV4BK6yqEHUFP0CvgXGR9midLJ3PCtAzMKhPKcwMiLSmj4ZHYCcX9mpLdHnevKEIwPFz2JzdCqHsZHbhWOOERW6nJO6sh27tb1croFrkVo-aUWJ5QT6v3k5TNY9YkIS9PqGS","expirationTime":null,"keys":{"p256dh":"BACh5foaX9_kuujhH0nrosSEjt_jUXOniI-OxLH8GgliJVa3NIWysG9cZMU0K4DfPvZHuANOWhq5gsry-7pTS94=","auth":"A5tiQJbVsE5WdrS9U-uSeA=="}}


const vapidKeys = {
    publicKey: 'BCs-9OzcDBy1KFQ1WpXe_rvjxqWyAVm_EiE9noO2dSmiglXNjeAAaxoHLlDQkyZ6sdIrsGlFWPUt-O67jWrSGqw',
    privateKey: 'llx3iQG5Vg4EK_5gCCRoZVCk-flpYTPGefCYOAyfGjw'
};

const message = {
    body: `Test message at ${Date.now()}`,
    title: 'Test title',
    tag: Date.now(),
};

webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

webpush.sendNotification({
        endpoint: subscription.endpoint,
        keys: {
            auth: subscription.keys.auth,
            p256dh: subscription.keys.p256dh
        }
    },
    JSON.stringify(message)
);
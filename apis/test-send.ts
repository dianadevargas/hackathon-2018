import * as webpush from 'web-push';
console.log('Loading function');

const vapidKeys = {
    publicKey: 'BANcGOHrYNBtP-4AMq-mNl0TVYrfKDBs_jiQtihsF-m45SrokRDyzfDP4gpqMpHMA2IFCsK02D_6IWSiiMDydWo',
    privateKey: 'x_-HurOOQzfcUeQmy-8YirDJ7FKJZWlsrhTr73tMxgE'
};

/**
 * Demonstrates a simple HTTP endpoint using API Gateway. You have full
 * access to the request and response payload, including headers and
 * status code.
 *
 */
export async function pushMessage (event, context, callback) {
    console.log('Received event:', JSON.stringify(event, null, 2));

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    switch (event.httpMethod) {
        case 'POST':
            const data = JSON.parse(event.body);
            const subscription = data['subscription'] || false; 
            const message = {
              title: data['message']['title'] || '',
              body: data['message']['body'] || '',
              icon: data['message']['icon'] || '',
              tag: data['message']['tag'] || Date.now(),
              data: data['message']['data'] || '',
            };

            if (subscription) {
              webpush.setVapidDetails(
                'mailto:example@yourdomain.org',
                vapidKeys.publicKey,
                vapidKeys.privateKey
              );
              
              await webpush.sendNotification({
                      endpoint: subscription.endpoint,
                      keys: {
                          auth: subscription.keys.auth,
                          p256dh: subscription.keys.p256dh
                      }
                  },
                  JSON.stringify(message)
              );
              done(null, `we posted: ${JSON.stringify(message)}`);
            } else {
              done(`No subscription`, null);
            }
            break;
        case 'PUT':
            done(null, 'we put');
            break;
        default:
            done('default error', null);
    }
};
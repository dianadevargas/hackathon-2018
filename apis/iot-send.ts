console.log('Loading function');

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
        case 'DELETE':
            done(null, 'we deleted');
            break;
        case 'GET':
            done(null, 'we get');
            break;
        case 'POST':
            done(null, 'we posted');
            break;
        case 'PUT':
            done(null, 'we put');
            break;
        default:
            done('default error', null);
    }
};
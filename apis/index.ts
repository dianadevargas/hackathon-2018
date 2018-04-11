import * as v4 from 'aws-signature-v4';
import * as crypto from 'crypto';

export async function signedUrl(event, context, callback) {
  const url = v4.createPresignedURL(
    'GET',
    'a1o58gpaobs59o.iot.ap-southeast-2.amazonaws.com',
    '/mqtt',
    'iotdevicegateway',
    crypto.createHash('sha256').update('', 'utf8').digest('hex'),
    {

      'protocol': 'wss',
      'region': 'ap-southeast-2',
    }
  );

  const response = {
    statusCode: 200,
    body: JSON.stringify({ url }),
  };

  callback(null, response);
}
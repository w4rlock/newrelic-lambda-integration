const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const Ssm = new AWS.SecretsManager({ // eslint-disable-line
  endpoint: 'https://secretsmanager.us-east-1.amazonaws.com',
  region: 'us-east-1'
});

const SecretId = '/path/to/NEW_RELIC_LICENSE_KEY';


const testTraceDistribuidFeature = async() => {
  const data = await Ssm.getSecretValue({ SecretId }).promise();
  if (data && data.SecretString) {
    console.log('Secret length: ' + data.SecretString.length);
  }

  await s3.listBuckets({}).promise();

  return true;
}

module.exports.hello = async(event) => {
  await testTraceDistribuidFeature();

  const body = { foo: 'bar' };
  const responseCode = event && event.responseCode
    ? event.responseCode
    : 200;

  // TODO: para probar los casos de errores de la lambda
  // En la invocacion le pasamos un obj como evento Ejemplo:
  // { "responseCode": 502, "err": "test undefined error" }
  if (responseCode === 502) {
    const err = event.err ? event.err : 'testttt message errorrrr';
    throw new Error(err);
  }

  const response = {
    statusCode: responseCode,
    headers: {
      'x-custom-header' : 'my custom header value',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(body)
  };

  console.log("response: " + JSON.stringify(response));
  return response;
};

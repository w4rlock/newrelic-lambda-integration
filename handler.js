module.exports.hello = async() => {
  const body = { foo: 'bar' };
  const responseCode = 200;

  const response = {
    statusCode: responseCode,
    headers: {
      'x-custom-header' : 'my custom header value',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(body)
  };

  console.log(process.env);
  console.log("response: " + JSON.stringify(response));
  return response;
};

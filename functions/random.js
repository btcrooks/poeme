const responses = require('../data/responses.json');

const randomize = (max) => Math.floor(Math.random() * max);
const getRandomResponse = (data) => data[randomize(data.length)];

exports.handler = async event => {
  const urlParameters = event.queryStringParameters;
  let statusCode = 200;
  let responseBody = [];

  try {
    Object.entries(urlParameters).forEach((param, index) => {
      let paramKey = param[0];
      let paramValue = param[1].split(', ');

      let responseKey = Object.keys(responses[0]);
      let responseValue = responses[0][paramKey];

      if (paramValue.length === 1) {
        // if only 1 param
        const result = responses.find((responseValue) => paramValue[0] === responseValue[paramKey]);
        responseBody.push(result);
        return null;
      } else if (paramValue.length > 0) {
        // if multipe params
        paramValue.forEach((val, index) => {
          const result = responses.find((responseValue) => val === responseValue[paramKey]);
          responseBody.push(result);
          return null;
        });
      } else {
        statusCode = 422,
        responseBody.push(JSON.stringify('No params\n'));
      };
    })
  } catch (err) {
    statusCode = 422,
    responseBody.push(JSON.stringify('Something went wrong\n'));
    responseBody.push(JSON.stringify(err));
  }
  // if (urlParameters) {
  //   urlParameters.forEach((key) => responseBody.push(getRandomResponse(responses)[key]));
  // } else {
  //   responseBody = getRandomResponse(responses);
  // }

  return {
    statusCode,
    body: JSON.stringify(getRandomResponse(responses)),
  }
}

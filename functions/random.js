const responses = require('../data/responses.json');

const randomize = (max) => Math.floor(Math.random() * max);
const getRandomResponse = (data) => data[randomize(data.length)];

exports.handler = async event => {
  const urlParameters = event.queryStringParameters;
  let responseBody = {};

  if (urlParameters) {
    urlParameters.forEach((key) => responseBody.push(getRandomResponse(responses)[key]));
  } else {
    responseBody = getRandomResponse(responses);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  }
}

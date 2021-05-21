const responses = require('../data/responses.json');

const randomize = (max) => Math.floor(Math.random() * max);
const getRandomResponse = (data) => data[randomize(data.length)];

exports.handler = async event => {
  const keys = event.queryStringParameters;
  console.log('✊🏾 keys', keys);
  return {
    statusCode: 200,
    body: JSON.stringify(getRandomResponse(responses)),
  }
}

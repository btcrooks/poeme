const responses = require('../data/responses.json');

const randomize = (max) => Math.floor(Math.random() * max);
const getRandomResponse = (data) => data[randomize(data.length)];

exports.handler = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(getRandomResponse(responses)),
  }
}

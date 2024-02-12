import gptConnector from './gptConnector.js';
export default async function validateInput(req, _res, next) { 
  const response = await gptConnector('createUser', req.body);
  if (response.message === 'ok') {
    next();
  } else {
    throw new Error(response.message);
  }
}
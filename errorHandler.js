import gptConnector from './gptConnector.js';
export default async function errorHandler(err, req, res, next) {
  try {
    const response = await gptConnector('errorHandler', err.message);
    res.status(response.status).json({ message: response.message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
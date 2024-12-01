'use strict';

const {
  successResponseHandler,
  errorResponseHandler,
} = require('../../helpers');
const { getQuoteFromOpenAi } = require('../../services/getQuoteFromOpenAi');

exports.getQuotes = async (req, res) => {
  try {
    const response = await getQuoteFromOpenAi();
    return successResponseHandler(res, response, 'OK');
  } catch (error) {
    return errorResponseHandler(error, req, res);
  }
};

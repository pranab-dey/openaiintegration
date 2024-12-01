'use strict';

const {
  successResponseHandler,
  errorResponseHandler,
} = require('../../helpers');

exports.createEmails = async (req, res) => {
  try {
    // save data in database. implementation should be in services dir.
    return successResponseHandler(
      res,
      {},
      'email has been added successfully!'
    );
  } catch (error) {
    return errorResponseHandler(error, req, res);
  }
};

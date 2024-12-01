'use strict';

/**
 * Load Dependencies
 */
const { health } = require('./health');
const { createEmails } = require('./emails');
const { getQuotes } = require('./quotes');

/**
 * Expose to use in other files
 */
module.exports = {
  health,
  createEmails,
  getQuotes,
};

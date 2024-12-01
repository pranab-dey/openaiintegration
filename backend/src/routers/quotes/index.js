'use strict';

/**
 * Load Dependencies
 */
const express = require('express');

/**
 * Load custom dependencies
 */

const { getQuotes } = require('../../controllers');

/**
 * Create Router
 */
const router = express.Router();

/**
 * quotes related routes
 */
router.get('/quotes', getQuotes);

module.exports = router;

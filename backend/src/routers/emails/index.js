'use strict';

/**
 * Load Dependencies
 */
const express = require('express');

/**
 * Load custom dependencies
 */

const { createEmails } = require('../../controllers');
const { validateRequest } = require('../../middlewares');

/**
 * Create Router
 */
const router = express.Router();

/**
 * quotes related routes
 */
router.post('/emails', [validateRequest('createEmails', 'body')], createEmails);

module.exports = router;

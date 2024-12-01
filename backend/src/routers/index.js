'use strict';

/**
 * Load Dependencies
 */
const express = require('express');

/**
 * Load custom dependencies
 */
const apiHealthRoutes = require('./health');
const emailsRoutes = require('./emails');
const quotesRoutes = require('./quotes');

/**
 * Create Router
 */

const routers = express.Router();

routers.use('/', apiHealthRoutes);
routers.use('/', emailsRoutes);
routers.use('/', quotesRoutes);

module.exports = routers;

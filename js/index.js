/*!
 * Copyright (c) 2026 T3 Innovation Network. All rights reserved.
 */
const {urlsToContexts, constantsToContexts} = require('./contexts');
const constantsToUrls = require('./urls');

module.exports = {
  constants: constantsToUrls,
  contexts: urlsToContexts,
  ...constantsToUrls,
  ...constantsToContexts
};

/*!
 * Copyright (c) 2022 Digital Credentials Consortium. All rights reserved.
 */
'use strict';

const {urlsToContexts, constantsToContexts} = require('./contexts');
const constantsToUrls = require('./urls');

module.exports = {
  constants: constantsToUrls,
  contexts: urlsToContexts,
  ...constantsToUrls,
  ...constantsToContexts
};

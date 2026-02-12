/*!
 * Copyright (c) 2026 T3 Innovation Network. All rights reserved.
 */
const context_v1 = require('./context_v1');
const urls = require('../urls');

const {CONTEXT_URL_V1} = urls;

const urlsToContexts = new Map();
urlsToContexts.set(CONTEXT_URL_V1, context_v1);

const constantsToContexts = {
  CONTEXT_V1: context_v1
};

module.exports = {
  urlsToContexts,
  constantsToContexts
};

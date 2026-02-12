// TEMPLATE USERS: CHANGE TO PULL IN YOUR OWN CONTEXT FILES
const context_v1_1 = require('./context_v1_1');
const context_v1_2 = require('./context_v1_2');
const urls = require('../urls');

// TEMPLATE USERS:  CHANGE THIS TO PULL IN YOUR URLS.
const {CONTEXT_URL_V1_1, CONTEXT_URL_V1_2} = urls;

// TEMPLATE USERS:  CHANGE THIS TO USE YOUR URLS AND CONTEXTS
const urlsToContexts = new Map();
urlsToContexts.set(CONTEXT_URL_V1_1, context_v1_1);
urlsToContexts.set(CONTEXT_URL_V1_2, context_v1_2);

// TEMPLATE USERS:  CHANGE THIS TO USE YOUR CONSTANTS AND CONTEXTS
const constantsToContexts = {
  CONTEXT_V1_1: context_v1_1,
  CONTEXT_V1_2: context_v1_2
};

module.exports = {
  urlsToContexts,
  constantsToContexts
};

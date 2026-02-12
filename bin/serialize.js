#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const ctxV1 = require('../js/contexts/context_v1');

// Serialize the context as JSON-LD
fs.writeFileSync(
  path.join(__dirname, '..', 'contexts', 'v1.jsonld'),
  JSON.stringify(ctxV1, null, 2) + '\n'
);

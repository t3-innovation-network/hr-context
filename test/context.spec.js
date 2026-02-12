/*!
 * Copyright (c) 2026 T3 Innovation Network. All rights reserved.
 */
const chai = require('chai');
chai.should();
const {expect} = chai;

const ctx = require('..');
const {
  contexts,
  constants,
  CONTEXT_URL_V1,
  CONTEXT_V1
} = ctx;

describe('Open Badges Context', () => {
  it('constants', async () => {
    expect(constants).to.exist;
    expect(CONTEXT_URL_V1).to.exist;
    expect(CONTEXT_V1).to.exist;
  });

  it('contexts', async () => {
    expect(contexts.get(CONTEXT_URL_V1)).to.have.property('@context');
  });
});

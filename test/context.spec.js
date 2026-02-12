/*!
 * Copyright (c) 2022 Digital Credentials Consortium. All rights reserved.
 */
const chai = require('chai');
chai.should();
const {expect} = chai;

const ctx = require('..');
const {
  contexts,
  constants,
  CONTEXT_URL_V1_1,
  CONTEXT_URL_V1_2,
  CONTEXT_V1_1,
  CONTEXT_V1_2
} = ctx;

describe('Open Badges Context', () => {
  it('constants', async () => {
    expect(constants).to.exist;
    expect(CONTEXT_URL_V1_1).to.exist;
    expect(CONTEXT_URL_V1_2).to.exist;
    expect(CONTEXT_V1_1).to.exist;
    expect(CONTEXT_V1_2).to.exist;
  });

  it('contexts', async () => {
    expect(contexts.get(CONTEXT_URL_V1_1)).to.have.property('@context');
    expect(contexts.get(CONTEXT_URL_V1_2)).to.have.property('@context');
  });
});

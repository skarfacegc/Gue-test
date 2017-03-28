'use strict';

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

const CoverageTest = require('../src/coverageTest');

describe('coverageTest', () => {
  describe('returnOne', () => {
    it('should return one', () => {
      const ct = new CoverageTest();
      expect(ct.returnOne()).to.equal(1);
    });
  });
});

'use strict';

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

const CoverageTest = require('../src/coverageTest');

describe('coverageTest', () =>{
  describe('constructor', () =>{
    it('should set testProp', () =>{
      const ct = new CoverageTest();
      expect(ct.testProp).to.equal('Hello There');
    });
  });
});

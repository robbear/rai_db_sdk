/**
 * Delve Client SDK
 * This is a Client SDK for Delve API
 *
 * The version of the OpenAPI document: 1.0.12
 * Contact: support@relational.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RaiDbSdk);
  }
}(this, function(expect, RaiDbSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RaiDbSdk.StorageProblem();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('StorageProblem', function() {
    it('should create an instance of StorageProblem', function() {
      // uncomment below and update the code to test StorageProblem
      //var instane = new RaiDbSdk.StorageProblem();
      //expect(instance).to.be.a(RaiDbSdk.StorageProblem);
    });

    it('should have the property exception (base name: "exception")', function() {
      // uncomment below and update the code to test the property exception
      //var instane = new RaiDbSdk.StorageProblem();
      //expect(instance).to.be();
    });

  });

}));
'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new thermostat();
  });

  it('starts at at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });
});
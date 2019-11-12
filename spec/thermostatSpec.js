"use strict";

//1 user story:
//Thermostat starts at 20 degrees

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("Thermostat initialisation", function() {
    it("starts at at 20 degrees", function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("current temperature function", function() {
    it("shows current temperature", function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe("increases in temperature with up()", function() {
    it("increases temperature", function() {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });
  });
});

//You can increase the temperature with an up function

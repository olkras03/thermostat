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

  describe("decreases in temperature with down()", function() {
    it("decreases temperature", function() {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });
  });

  describe("minimum temperature set to 10 degrees", function() {
    it("has a minimum of 10 degrees", function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });

  describe("power saving mode and max tempearture", function() {
    it("has power saving mode on by default", function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it("can switch power saving mode off", function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it("can switch power saving mode back on", function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    describe("when power saving mode is on", function() {
      it("has a maximum temperature of 25 degrees", function() {
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(25);
      });
    });

    describe("when power saving mode is off", function() {
      it("has max temperature of 32", function() {
        thermostat.switchPowerSavingModeOff();
        for (var i = 0; i < 13; i++) {
          thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(32);
      });
    });
  });

  describe("reset temperature", function() {
    it("can be reset to the default", function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      thermostat.resetTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe("displaying usage levels", function() {
    describe("when the temperature is below 18 degrees", function() {
      it("considered low-usage", function() {
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual("low-usage");
      });
    });

    describe("when the temperature is between 18 and 25 degrees", function() {
      it("considered medium-usage", function() {
        expect(thermostat.energyUsage()).toEqual("medium-usage");
      });
    });

    describe("when the temperature is above  25 degrees", function() {
      it("considered high-usage", function() {
        thermostat.switchPowerSavingModeOff()
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});

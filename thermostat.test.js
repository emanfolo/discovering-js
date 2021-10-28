const Thermostat = require("./thermostat")
const thermostat = new Thermostat


describe('Thermostat', ()=> {
  it('instantiates should have a default temp of 20', () => {
    expect(thermostat.temperature).toBe(20)
  });
  describe('getTemperature', ()=> {
    expect(thermostat.getTemperature()).toBe(20)
  });
  describe('up', ()=> {
    it('increases the temperature by 1', () => {
    thermostat.temperature = 20
    thermostat.up()
    expect(thermostat.getTemperature()).toBe(21)
  });
});
  describe('down', ()=> {
    it('decreases the temperature by 1', () => {
    thermostat.temperature = 20
    thermostat.down()
    thermostat.down()
    expect(thermostat.getTemperature()).toBe(18)
  });
});
  describe('setPowerSavingMode', () => {
    it('sets mode to true or false', () => {
      expect(thermostat.mode).toBe(true)
      thermostat.setPowerSavingMode(false)
      expect(thermostat.mode).toBe(false)
    });
    it('prevents the temperature from exceeding 25', () => {
      thermostat.setPowerSavingMode(true)
      thermostat.temperature = 25
      thermostat.up()
      expect(thermostat.getTemperature()).toBe(25)
    })
  })
})
class Thermostat {
  constructor(temperature = 20 ) {
    this.temperature = temperature
    this.mode = true
  }

  getTemperature() {
    return this.temperature
  }

  up() {
    if (this.mode == true && this.temperature >= 25) {
      this.temperature = 25;
    }else {
      this.temperature += 1
    }
  }
  down() {
    this.temperature -= 1
  }
  setPowerSavingMode(boolean) {
    this.mode = boolean
  }
}
module.exports = Thermostat
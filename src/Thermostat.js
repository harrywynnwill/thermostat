function Thermostat(){

  this.temperature = 20;
  this.minimumTemp = 10;
  this.maximumTemp = 25;
  this.powerSaving = true;

  Thermostat.prototype.increaseTemperature = function() {

    if(this.temperature < this.maximumTemp) {
    this.temperature += 1;
    }
  };

  Thermostat.prototype.decreaseTemperature = function() {
    if(this.temperature > this.minimumTemp){
        this.temperature -= 1;
    }
  };
  Thermostat.prototype.isPowerSaving = function () {
    return this.powerSaving;
  };
}
Thermostat.prototype.powerSavingOff = function () {
  this.powerSaving = false;
  this.maximumTemp = 32;
};
Thermostat.prototype.powerSavingOn = function () {
  this.powerSaving = true;
  this.maximumTemp = 25;
};

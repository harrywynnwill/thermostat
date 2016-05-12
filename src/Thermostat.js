function Thermostat(){

  DEFAULT_TEMP = 20;
  MINIMUM_TEMP = 10;
  MAXIMUM_TEMP = 32;

  POWER_SAVING_MAX = 25;

  this.temperature = DEFAULT_TEMP;
  this.minimumTemp = MINIMUM_TEMP;
  this.maximumTemp = POWER_SAVING_MAX;
  this.powerSaving = true;
}

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

  Thermostat.prototype.powerSavingOff = function () {
    this.powerSaving = false;
    this.maximumTemp = MAXIMUM_TEMP;
  };

  Thermostat.prototype.powerSavingOn = function () {
    this.powerSaving = true;
    this.maximumTemp = POWER_SAVING_MAX;
  };

  Thermostat.prototype.reset = function () {
    this.temperature = DEFAULT_TEMP;
  };

  Thermostat.prototype.usageMonitor = function () {
    if(this.temperature < 18 ){
      return ('low-usage');
    }
    if(this.temperature < 25 ){
      return ('medium-usage');
    }
    else{
      return 'high-usage';
    }
  };

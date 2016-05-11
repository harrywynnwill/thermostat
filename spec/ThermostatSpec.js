describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  describe('Changing temperature', function(){
    it('can increase the temperature with the up button', function(){
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    });

    it('can decrease the temperature with the down button', function(){
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    });
  });
  it('has a minimum temperature of 10 degrees', function(){
      for(i=0; i <11; i++ ){
        thermostat.decreaseTemperature();
      }
      expect(thermostat.temperature).toEqual(10);
  });
  it('has a maximum temperature of 32 degrees', function(){
      thermostat.powerSavingOff();
      for(i=0; i <13; i++ ){
        thermostat.increaseTemperature();
      }
      expect(thermostat.temperature).toEqual(32);
  });
  it('has power saving on by default', function(){
    expect(thermostat.powerSaving).toBe(true);
  });
  it('responds to #powerSavingOff', function(){
    thermostat.powerSavingOff();
    expect(thermostat.powerSaving).toBe(false)
  });
  it('has a maximum of 25 when power saving is on', function(){
    thermostat.powerSavingOn;
    for(i=0; i <6; i++ ){
      thermostat.increaseTemperature();
    }
    expect(thermostat.temperature).toEqual(25);

  });

});

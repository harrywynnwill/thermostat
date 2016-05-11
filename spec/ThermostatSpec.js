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


});

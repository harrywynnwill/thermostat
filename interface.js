$(document).ready(function(){
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.usageMonitor());

  }

  $('#temperature-up').on('click', function() { // event listener
  thermostat.increaseTemperature(); // update model
  updateTemperature();
  });

  $("#temperature-down").click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  thermostat.decreaseTemperature();
  updateTemperature();
  });
  $('#temperature-reset').click(function() {
  thermostat.reset();
  updateTemperature();
});

  $('#powersaving-on').click(function() {
    thermostat.powerSavingOn();
    $('#power-saving-status').text('on');
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.powerSavingOff();
    $('#power-saving-status').text('off');
  updateTemperature();
})



});

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
  });

  $('#powersaving-off').click(function() {
    thermostat.powerSavingOff();
    $('#power-saving-status').text('off');
    updateTemperature();
  });
  $('#current-city').change(function(event){

    var city = $('#current-city').val();
    displayWeather(city);
  });

  //  displayWeather('London');
  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var key = ',uk&appid=0d8f313ba566708ee814c1d48b2ddddb';
    var units = '&units=metric';
    $.get(url + key + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  }
});

document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch (city) {
    var key = 'fdec8be240d71f7b1eeb3f48ffd910df'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function() {
        });
}

function cityWeather(e) {
    weatherDataFetch('Tallinn');
}
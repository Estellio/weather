var form = document.querySelector('form')
form.addEventListener('submit', weatherDataFetch)

function weatherDataFetch (e) {
    var key = 'fdec8be240d71f7b1eeb3f48ffd910df';
    var city = document.getElementById('city').value;
    console.log(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            console.log(data);
            drawWeather(data);
        })
        .catch(function() {
        });
    e.preventDefault()
    document.getElementById('city').value = ''
}

function drawWeather(data) {
    var celsius = Math.round(parseFloat(data.main.temp)-273.15);
    var description = data.weather[0].description;

    document.querySelector('#description').innerHTML = description;
    document.querySelector('#temp').innerHTML = celsius + '&deg';
    document.querySelector('#location').innerHTML = data.name;

}
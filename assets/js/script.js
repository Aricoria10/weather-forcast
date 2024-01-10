const getCurrent = async(lat,lon)=>{
    console.log('In current ${lat, lon}');
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=4b5355f497ffdb742663b386a38aad67`);
    const weather = await response.json();
    $(".current").append($(`<h1>${weather.name}</h1>`));
    $(".current").append($(`<p>Temp: ${weather.main.temp}</p>`));
    $(".current").append($(`<p>Wind: ${weather.wind.speed}</p>`));
    $(".current").append($(`<p>Humidity: ${weather.main.humidity}</p>`));
    console.log(weather);
    console.log(weather.main);
    console.log(weather.main.temp);
    console.log(weather.wind.speed);
}

const getCoords = async(city) => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=10&appid=4b5355f497ffdb742663b386a38aad67`);
    const data = await response.json();
    const lat = data[0].lat;
    const lon = data[0].lon;
        getCurrent(lat, lon);
}

$(".weather_btn").on("click",()=> {
    $(".current").empty();
    getCoords($(".city").val());
});
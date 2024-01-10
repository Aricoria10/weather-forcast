const getCurrent = async(lat,lon) => {
    console.log('In current ${lat, lon}');
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6c5800da6de86307778499555507fee0')
    const weather = await response.json();
}

const getCoords = async(city) => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=10&appid=6c5800da6de86307778499555507fee0`)
    const data = await response.json();
    const lat = data[0].lat;
    const lon = data[0].lon;
    getCurrent(lat, lon);
}

$(".weather_btn").on("click",()=> {
    $(".current").append($(".city").val())
    getCoords($(".city").val());
});
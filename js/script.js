function getWeather() {
    /* 
örenek adres :https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
*/

// openWeather API'den url ve key aldık
const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'd90b27c20d0e74e19b8862ab663c800a';
// input girdikten sonra enter tuşuna bastığımızda getResult fonk. çalışacak çalışırken inputtan aldığımız şehir ismini değer olarak gönderiyoruz
const setQuery = (e) => {
    if(e.keyCode == '13'){
        getResult(searchBar.value)
    }
}
const getResult = (cityName) =>{
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log(query);
    fetch(query).then(weather =>{
        return weather.json()
    }).then(displayResult)
}
const displayResult = (result) =>{
    console.log(result);

    let city = document.querySelector('.city')
    city.innerText = `${result.name}`;

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`;

    let desc = document.querySelector('.desc')
    desc.innerText = `${result.weather[0].description}`;

    let minmax = document.querySelector('.minmax');
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
}
// şehir ismi girildiğinde istek yapılacak
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress',setQuery)

}
getWeather();
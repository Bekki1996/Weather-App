const inputValue = document.getElementById("input");
let degree = document.getElementById("degree");
let city = document.getElementById("city");
let weatherType = document.getElementById("weatherType");
let weatherImage = document.getElementById("image");
let country = document.getElementById("country");
let humidity = document.getElementById("humidity");
let feelsLike = document.getElementById("feelsLike");
let day = document.getElementById("day");
let night = document.getElementById("night");

let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
let apiKey = "&appid=63d84d7b2e4cd1c8a770ddca0fdce8b8&lang=PT&units=metric";

//=========================================================//

inputValue.addEventListener('keypress', setFunction);

function setFunction(e) {
    if (e.keyCode == 13) {
        getDataFromApi(inputValue.value);
    }
}


// async function getDataFunction(value) {
//     fetch(apiUrl + value + apiKey)
//         .then(function (response) {
//             return response.json();
//         }).then(function (weather) {
//             degree.innerHTML = weather.main.temp + '°C';
//             city.innerHTML = weather.name;
//             weatherType.innerHTML = weather.weather[0].main;
//             country.innerHTML = weather.sys.country;
//             humidity.innerHTML = weather.main.humidity;
//             feelsLike.innerHTML = weather.main.feels_like + '°C';
//             day.innerHTML = weather.main.temp_max + '°C';
//             night.innerHTML = weather.main.temp_min + '°C';
//             // weatherImage.src = "http://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png";


//             const apiResponse = fetch(apiUrl + value + apiKey);
//             const apiData = apiResponse.json()

//             if (apiData.weather[0].id) {
//                 switch (apiData.weather[0].main) {
//                     case 'Clouds':
//                         weatherImage.src = '/img/cloud.png'
//                         break;
//                     case 'Clear':
//                         weatherImage.src = '/img/sun.png'
//                         break;
//                     case 'Rain':
//                         weatherImage.src = '/img/rain.png'
//                         break;
//                     default:
//                         weatherImage.src = "http://openweathermap.org/img/wn/" + apiData.weather[0].icon + ".png";
//                 }
//             }
//         }).catch(function (err) {
//             console.log(err);
//         })
// }


async function getDataFromApi(value) {
    try {
        const apiResponse = await fetch(apiUrl + value + apiKey);
        const apiData = await apiResponse.json()
        degree.innerHTML = await apiData.main.temp + '°C';
        city.innerHTML = await apiData.name;
        weatherType.innerHTML = await apiData.weather[0].main;
        country.innerHTML = await apiData.sys.country;
        humidity.innerHTML = await apiData.main.humidity;
        feelsLike.innerHTML = await apiData.main.feels_like + '°C';
        day.innerHTML = await apiData.main.temp_max + '°C';
        night.innerHTML = await apiData.main.temp_min + '°C';

        if (apiData.weather[0].id) {
            switch (apiData.weather[0].main) {
                case 'Clouds':
                    weatherImage.src = 'img/cloud.png'
                    break;
                case 'Clear':
                    weatherImage.src = 'img/sun.png'
                    break;
                case 'Rain':
                    weatherImage.src = 'img/rain.png'
                    break;
                default:
                    weatherImage.src = "http://openweathermap.org/img/wn/" + await apiData.weather[0].icon + ".png";
            }
        }

        console.log('apiData >>> ', apiData.weather)
    } catch (error) {
        console.log(error);
    }
}

getDataFromApi()


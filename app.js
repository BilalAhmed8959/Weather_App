const  container = document.querySelector(".container")
const  seacch = document.querySelector(".seacch-box button")
const  Weather = document.querySelector(".Weather-box")
const  WeatherD = document.querySelector(".Weather-detalis")


seacch.addEventListener("click", ()=>{
    const apikey = "a81d01e6473aac56d41b9d00e4ac2660";
    const city = document.querySelector(".seacch-box input").value;

     if(city == "")
        return;
     
     fetch("https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}").then(Response => Response.json()).then(json=>{
        const image = document.querySelector(".Weather-box img");
        const temperature = document.querySelector(".Weather-box .temperature");
        const description = document.querySelector(".Weather-box .description");
        const humidity = document.querySelector(".Weather-detalis .humidity span");
        const wind = document.querySelector(".Weather-detalis .wind span");
        switch(json.Weather[0].main){
            case 'Clear':
                image.src = './photo-1663970206579-c157cba7edda.jpeg';
                break;

                case 'Rain':
                image.src = './photo-1663970206579-c157cba7edda.jpeg';
                break;

                default:
                break;
        }
     });
});
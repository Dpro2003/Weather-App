const apikey="925410361a543eae10494813ea083cf6";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkweather(cityname){
    const response = await fetch(apiurl+cityname+ `&appid=${apikey}`);
  
    var info=await response.json();
   
    document.querySelector(".cityname").innerHTML=info.name;
    document.querySelector(".temp").innerHTML= Math.round(info.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML=info.main.humidity + "%";
    document.querySelector(".Wind").innerHTML=info.wind.speed+ " Kmph";
    if (info.weather[0].main=="Clouds") {
        weatherIcon.src = "images/clouds.png"
    }
    if (info.weather[0].main=="Clouds") {
        weatherIcon.src = "images/clouds.png"
    }
    else if (info.weather[0].main=="Clear") {
        weatherIcon.src = "images/clear.png"
    }
    else if (info.weather[0].main=="Rain") {
        weatherIcon.src = "images/rain.png"
    }
    else if (info.weather[0].main=="Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    }
    else if (info.weather[0].main=="Mist") {
        weatherIcon.src = "images/mist.png"
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display="none";

}

searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value); 
})
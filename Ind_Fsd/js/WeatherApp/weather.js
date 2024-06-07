const apiKey="e0636f71c487c3ab40bc18ac677fa589"

const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="



const searchBtn=document.querySelector(".search button")
const SearchBox=document.querySelector(".search input")
const weatherIcon=document.querySelector(".weather-icon")




async function checkWeather(city){
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(response.status == 404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }
    else{
        const data= await response.json();
        console.log(data)
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c"
        document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h"
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";

       if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png"
       }
       else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png"
       }
       else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png"
       }
       else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
       }
       else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png"
       }

        document.querySelector(".error").style.display="none"
        document.querySelector(".weather").style.display="block"
        
    }


}

searchBtn.addEventListener("click",()=>{
    checkWeather(SearchBox.value)
   
})

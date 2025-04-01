const apiKey = "604dd409213061b27a2986c73be9cf34";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkweather(city){
    const respons= await fetch(apiurl + city+`&appid=${apiKey}` );
    
    if(respons.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    else{
        
        var data = await respons.json();

       }
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
     
    if(data.weather[0].main=="clouds"){
        weatherIcon.src="C:\Users\Dell\Desktop\wether app\clouds.png"
    }
    else if(data.weather[0].main=="clear"){
        weatherIcon.src="C:\Users\Dell\Desktop\wether app\clear.png"
    }
    else if(data.weather[0].main=="rain"){
        weatherIcon.src="C:\Users\Dell\Desktop\wether app\rain.png"
    }
    else if(data.weather[0].main=="drizzle"){
        weatherIcon.src="C:\Users\Dell\Desktop\wether app\drizzle.png"
    }
    else if(data.weather[0].main=="mist"){
        weatherIcon.src="C:\Users\Dell\Desktop\wether app\drizzle.png"
    }
    else if(data.weather[0].main=="snow"){
        weatherIcon.src="C:\Users\Dell\Desktop\wether app\snow.png"
    }
    

       
    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none";
    
}

  


    
   

searchbtn.addEventListener("click", ()=>{
checkweather(searchbox.value);
})
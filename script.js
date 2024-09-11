const searchweather=document.querySelector("#searchsection");
const grantaccess=document.querySelector("#grantaccesssection");
const showweather=document.querySelector("#showweathersection");
const searchweatherbtn=document.querySelector("#searchweatherbutton");
const yourweatherbtn=document.querySelector("#yourweatherbutton");
const showcityname=document.querySelector("#cityname");
const showweathername=document.querySelector("#showweathertype");
const showtemperaturenow=document.querySelector("#showtemperature");
const showwindspeedvalue=document.querySelector("#windspeedvalue");
const showhumiditylevel=document.querySelector("#humidityvalue");
const showcloudvalue=document.querySelector("#cloudvalue");
const grantaccessbtn=document.querySelector("#grantaccess")
const main=document.querySelector("#lower")
const load=document.querySelector("#loading")
let lat=-1,lon=-1;
let apikey=`6a0405b1a7664a63af31082624120216`;
searchweather.classList.add("active");
showweather.classList.add("active");
async function weatherbtao(cityname){
    main.classList.add("active")
    load.classList.remove("active")
    
    let fetchdata=await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityname}&aqi=no`);
    let data=await fetchdata.json();
    // console.log(data.location.country);
    // searchweather.classList.add("active");
    showcityname.innerText=`${data.location.name} (${data.location.country})`;
    showweathername.innerText=data.current.condition.text;
    showtemperaturenow.innerText=`${data.current.temp_c} °C`;
    showwindspeedvalue.innerText=`${data.current.wind_kph} mph`;
    showhumiditylevel.innerText=`${data.current.humidity} %`;
    showcloudvalue.innerText=`${data.current.cloud} %`;
    main.classList.remove("active")
    load.classList.add("active")
    
    showweather.classList.remove("active")
}

function searchsectiondikhao(){
    main.classList.add("active")
    load.classList.remove("active")
    yourweatherbtn.classList.remove("active");
    searchweatherbtn.classList.add("active")
    grantaccess.classList.add("active");
    showweather.classList.add("active");
    searchweather.classList.remove("active")
    main.classList.remove("active")
    load.classList.add("active")
}
searchweatherbtn.addEventListener("click",searchsectiondikhao)



function weathersectiondikhao(){
    main.classList.add("active")
    load.classList.remove("active")
    searchkro.classList.add("active")
    yourweatherbtn.classList.remove("active");
    searchweatherbtn.classList.add("active")
    let cityinput=document.querySelector("#citytosearch");
    let cityname=cityinput.value;
    // console.log(cityname);
    weatherbtao(cityname);
    main.classList.remove("active")
    load.classList.add("active")
}
const searchkro=document.querySelector("#searchthisplace");
searchkro.addEventListener("click",weathersectiondikhao);
async function yourweatherbtado(){
    main.classList.add("active")
    load.classList.remove("active")
    let fetchdata=await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${lat},${lon}&aqi=no`);
    let data=await fetchdata.json();
    // console.log(data.location.country);
    // searchweather.classList.add("active");
    
    // grantaccess.classList.add("active");
    // showweather.classList.remove("active");
    showcityname.innerText=`${data.location.name} (${data.location.country})`;
    showweathername.innerText=data.current.condition.text;
    showtemperaturenow.innerText=`${data.current.temp_c} °C`;
    showwindspeedvalue.innerText=`${data.current.wind_kph} mph`;
    showhumiditylevel.innerText=`${data.current.humidity} %`;
    showcloudvalue.innerText=`${data.current.cloud} %`;
    grantaccess.classList.add("active")

    showweather.classList.remove("active")
    main.classList.remove("active")
    load.classList.add("active")

}
function hai(position){
    // load.classList.remove("active")
    cityname.innerText="Kaam ho gya"
    lat=position.coords.latitude;
    lon=position.coords.longitude;
    yourweatherbtado();
    // console.log(position.coords.latitude);
}
function nahai(){
    
    grantaccess.classList.add("active")

    showweather.classList.remove("active")
    cityname.innerText="Bhai tere net m dikkat hai";
}
function phledundo(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(hai,nahai);
    }
    else{
        cityname.innerText="Bhai tere laptop m dikkat hai"
    }
}

function showyourweather(){
    yourweatherbtn.classList.add("active");
    searchweatherbtn.classList.remove("active")
    showweather.classList.add("active");
    searchweather.classList.add("active");
    if(lat!=-1){
        yourweatherbtado();
    }
    else{
        grantaccess.classList.remove("active");
        showweather.classList.add("active");
        searchweather.classList.add("active");
    }
}
grantaccessbtn.addEventListener("click",phledundo);
yourweatherbtn.addEventListener("click",showyourweather);
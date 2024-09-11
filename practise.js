const lat=48.8567,lon=2.3508;
let apikey=`6a0405b1a7664a63af310826241202`;
async function work(){
    let data=await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${lat},${lon}&aqi=no`)
    let datac=await data.json();
    const showweathername=document.querySelector("#showweathertype");
    showweathername.innerText=(datac.location.name);
    }
    work()
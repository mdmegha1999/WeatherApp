function weat(){ 
        
    let input = document.getElementById ('inp').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=103dac38b79616e18a19b29baac046cf`)
.then(response=>response.json())
.then(data=>{
document.getElementById('location').innerHTML=`${data.name}`;
document.getElementById('temperature').innerHTML=`Temperature: ${data.main.temp}°C`;
document.getElementById('temp-max').innerHTML=`Max-Temp: ${data.main.temp_max}°C`;
document.getElementById('temp-min').innerHTML=`Min-Temp: ${data.main.temp_min}°C`;
document.getElementById('visi').innerHTML=`Visibility: ${data.visibility}`;
document.getElementById('press').innerHTML=`Pressure: ${data.main.pressure}`;
})
}
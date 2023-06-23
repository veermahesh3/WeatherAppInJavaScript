
function getWeather(){
      event.preventDefault();
    let city =document.getElementById('city').value;
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d695f7ea5126498196c2a5c6f4e44d37`;
    fetch(url)
    .then(res=>res.json())
    .then((data)=>{
        let temp=data.main.temp - 273.15;
        temp=temp.toFixed(2);
    document.getElementById('result').textContent=
    `Weather in ${city} is ${temp}`
    ;
    data.main.temp - 273.15;
});
}


document.querySelector(".busca").addEventListener("submit", async (event)=> {
    event.preventDefault();
    let input = encodeURI(document.getElementById("searchInput").value)
    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=fedc3f5340740f76974e28275a094876&units=metric&lang=pt_br`)
    .then((response) => response.json())
    .then((json) => json);

    


    document.querySelector(".resultado").style.display = 'block';
    document.querySelector(".titulo").innerHTML= `${result.name}-${result.sys.country}`
    document.querySelector(".tempInfo").innerHTML = `${result.main.temp}<sup> °C</sup>`;
    document.querySelector(".ventoInfo").innerHTML = `${result.wind.speed}<span> km/h</span></div>`;
    document.querySelector(".ventoPonto").style.transform = `rotate(${result.wind.deg-90}deg)`
    document.querySelector("#imagemClima").src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
    console.log(result)

})


const getData = async ()=>{
    let myApi = 'c48fe82986f0327c396d556ad18336f2'
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=${myApi}&units=metric`

   
    let response = await fetch(endpoint) 
    fetch(endpoint)
    .then((response)=>response.json())
    .then((convertedResponse=>{
        console.log(convertedResponse)
        let getit = convertedResponse.wind.deg
       console.log(getit)
       deg.innerHTML = `${getit}<sup>o</sup>`

       let zone = convertedResponse.timezone
       console.log(zone)
       zon.innerHTML = `${zone}<sup>o</sup>`

       let name = convertedResponse.name
       console.log(name)
       nam.innerHTML = `${name},`

       let cosusunset = convertedResponse.sys.country
       console.log(cosusunset)
       con.innerHTML = `${cosusunset}`

       let namey = convertedResponse.name
       console.log(namey)
       namy.innerHTML = `${namey},`

       let coney = convertedResponse.sys.country
       console.log(coney)
       cony.innerHTML = `${coney}`

       let Des = convertedResponse.weather[0].description
       console.log(Des)
       dest.innerHTML = `${Des}`

       let humidity = convertedResponse.main.humidity
       console.log(humidity)
       hum.innerHTML = `${humidity}g.m<sup>-3</sup>`

       let getat = Math.round(convertedResponse.main.temp)
       console.log(getat)
       temp.innerHTML = `${getat}<sup>o</sup>C`






       
       let pressure = convertedResponse.main.pressure
       console.log(pressure)
       pre.innerHTML = `${pressure}N/m<sup>2</sup>`

       let latitute = convertedResponse.coord.lat
       console.log(latitute)
       lat.innerHTML = `${latitute}<sup>o</sup>`

       let longitude = convertedResponse.coord.lon
       console.log(longitude)
       long.innerHTML = `${longitude}<sup>o</sup>`

       let susunset = convertedResponse.sys.sunrise
       console.log(susunset)
       rise.innerHTML = `${susunset}<sup>o</sup>`

       let sunset = convertedResponse.sys.sunset
       console.log(sunset)
       set.innerHTML = `${sunset}<sup>o</sup>`

    }))
}    
   
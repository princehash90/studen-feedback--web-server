let weatherApiUrl= 'https://api.weather.gov/gridpoints/MPX/116,72/forecast'// making a reuqest to API

let forecastTableElement= document.querySelector('#weather-forecast');// creating a table

//making request to the API Url
//fetch returns a Promise - represents a result but we do not know immediately
fetch(weatherApiUrl).then( res => {// response is bytes of data
    let jsonProcessingPromise = res.json()// takes the data and return as JSON
    return jsonProcessingPromise
}).then(processedJson =>{
    //console.log(processedJson)
    let forecastProperties = processedJson.properties
    //console.log(forecastProperties)
    let forcastArray= forecastProperties.periods
    //console.log(forcastArray)

    forcastArray.forEach( (forecast) =>{ //looping over the forcastArray to access each element

        let timePeriod= forecast.name// saving in variable the name element in the array
        let temperatureText= forecast.temperature// storing the temperature element in the array
        let iconPeriod = forecast.icon
        let detailedForestPeriod= forecast.detailedForecast// storing the detailed weather info in the array
        let windSpeedPeriod =forecast.windSpeed

        let tableRowElement = document.createElement('tr');// creating the table row

        let timePeriodTdElement = document.createElement('td');// data for time
        let temperatureTdElement = document.createElement('td');//temperature data
        let iconTdElement = document.createElement('td');// iconTdElemen
        let detailedTdElement = document.createElement('td');
        let windTdElement = document.createElement('td');

        timePeriodTdElement.innerHTML=timePeriod// printing the time in the html
        temperatureTdElement.innerHTML=temperatureText// printing the temperature in the table
        iconTdElement.innerHTML=iconPeriod
        detailedTdElement.innerHTML=detailedForestPeriod// printing the detailed weather info on the table
        windTdElement.innerHTML=windSpeedPeriod// recording the windspeed


//adding the weather info into the table
        tableRowElement.appendChild(timePeriodTdElement)
        tableRowElement.appendChild(temperatureTdElement)
        tableRowElement.appendChild(iconTdElement)
        tableRowElement.appendChild(detailedTdElement)
        tableRowElement.appendChild(windTdElement)
        forecastTableElement.appendChild(tableRowElement)

    })
})

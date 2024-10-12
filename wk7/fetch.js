
let url ="https://api.wheretheiss.at/v1/satellites/25544"

let issLat = document.querySelector('#iss-lat')
let issLong= document.querySelector('#iss-long')
let  timeIssLocationFetched = document.querySelector('#time')

let update=10000
let maxFailedAttempts = 3
let issMarker

let spaceIcon= L.icon({iconUrl:'space-icon.png', iconSize:[30,30], iconAnchor:[25,25]},)

let map = L.map('iss-map').setView([0,0],1)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);// this is the tile which we got it from openstreetmap.org


iss(maxFailedAttempts)// call function one time to start
//setInterval(iss,update)

function iss(attempts) {
    if (attempts<=0){
        alert('Attempted to contact server failed after several attempts.')
        return
    }

    fetch(url).then((res) => {
        return res.json()
    }).then((issData) => {
        console.log(issData)
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long

        //display marker if it exists or move if it exists
        if (!issMarker){
            //create marker
            issMarker= L.marker([lat, long], {icon:spaceIcon}).addTo(map)// create the marker
        }else {
            issMarker.setLatLng([lat, long])// already exists- move to new location
        }
//updating the time to the current date and time
        let now= Date()
        timeIssLocationFetched.innerHTML=`This data was fetched at ${now}`

    }).catch((err) => {
        attempts--//subtracts 1 from number of attemps
        console.log('Error', err)
    }).finally(()=> {
            //finally runs whether the fetch worked or failed
            //calls the iss function after a delay of update miliseconds
            //to update the position
            setTimeout(iss, update, attempts)
        })
}

//fetch(url).then( (res =>res.json()))
// .then((isData) =>{
//     console.log(isData)
// })


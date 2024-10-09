let metroCenterCoordinates =[44.96,-93.2]
let zoomlevel=9 //1=is whole world 20 is max

let map=L.map('college-map').setView(metroCenterCoordinates, zoomlevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);// this is the tile which we got it from openstreetmap.org

campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] },
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] },
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] },
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]

campuses.forEach(function (collegeCampus) {
    //marker for this college campus
    let markerText= `<b>${collegeCampus.name}</b><br><a href="${collegeCampus.website}">Website</a>`;
   L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map)

})

//let mctcCoordinates =[44.9724, -93.2844]// setting the coordinates for MCTC
//let mctcMarker= L.marker(mctcCoordinates)
    //.bindPopup('Minneapolis College <br><a href="http://minneapolis.edu" >website</a>').addTo(map)
//setting the marker for MCTC on the map. also Adding a popup to say what the marker is with
//also adding a html link of the website

//let stPaulCoordinates = [44.9483, -93.2844]// setting the coordinates for St Paul College
//let stPaulMarker= L.marker(stPaulCoordinates).bindPopup
//('St. Paul College<br><a href="http://saintpaul.edu">St paul College Website</a>').
//addTo(map)//setting the marker for St Paul College

//let normandaleCoordinates =[44.8297, -93.3312]// adding normandale coordinates
//let normandaleMarker= L.marker(normandaleCoordinates)
    //.bindPopup('Normandale College <br><a href="http://normandale.edu"> Normandale College Website</a>').addTo(map)


let metroAreaCircle= L.circle(metroCenterCoordinates, {
        color:'green',
        radius: 30000,
        fillOpacity: 0.1,
}).bindPopup('Twin Cities').addTo(map)// adding a circle to the coordinates




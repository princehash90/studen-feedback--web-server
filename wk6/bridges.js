let mapCenter =[45,-93] //start point of the map
let zoomLevel =4.3
let bridgeMap = L.map('bridge-map').setView (mapCenter,zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
}).addTo(bridgeMap)

//when we have a set of objects, and they are all have same attributes, it is common to save as array of objects

//Verrazano-Narrows Bridge	New York, NY	1298.4	40.6066, -74.0447
// Golden Gate Bridge	San Francisco and Marin, CA	1280.2	37.8199, -122.4783
// Mackinac Bridge	Mackinaw and St Ignace, MI	1158.0	45.8174, -84.7278
// George Washington Bridge	New York, NY and New Jersey, NJ	1067.0	40.8517, -73.9527
// Tacoma Narrows Bridge	Tacoma and Kitsap, WA	853.44	47.2690, -122.5517//

let bridgeList=[
    {name:'Verrazano-Narrows Bridge', location:'New York, NY',span: '1298.4', coordinates: [40.6066, -74.0447]},
    {name:'Golden Gate Bridge', location:'San Francisco and Marin, CA',span: '1280.2', coordinates: [37.8199, -122.4783]},
    {name:'Verrazano-Narrows Bridge', location:'New York, NY',span: '1298.4', coordinates: [40.6066, -74.0447]},
    {name:'Verrazano-Narrows Bridge', location:'New York, NY',span: '1298.4', coordinates: [40.6066, -74.0447]},
    {name:'Verrazano-Narrows Bridge', location:'New York, NY',span: '1298.4', coordinates: [40.6066, -74.0447]}
]

bridgeList.forEach(function (bridgeObject) {
    let bridgeName=bridgeObject.name
    let bridgeCoordinates=bridgeObject.coordinates

    //todo -add a popup- see videos e.g "Tacoma Narrow Bridge, Tacoma, Span,

    let bridgeMarker= L.marker(bridgeCoordinates)
    bridgeMarker.addTo(bridgeMap)
    bridgeMarker.bindPopup('hello')
})


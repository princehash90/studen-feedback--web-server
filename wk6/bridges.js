let mapCenter =[40,-99] //start point of the map
let zoomLevel =4.49//setting up the view
let bridgeMap = L.map('bridge-map').setView (mapCenter,zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
}).addTo(bridgeMap)

let bridgeIcon=L.icon({// setting up a variable for icon
    iconUrl:'bridge.png',// this is the name of the icon
    iconSize:[30,30],//setting the size of the icon
})

//when we have a set of objects, and they are all have same attributes, it is common to save as array of objects

//Verrazano-Narrows Bridge	New York, NY	1298.4	40.6066, -74.0447
// Golden Gate Bridge	San Francisco and Marin, CA	1280.2	37.8199, -122.4783
// Mackinac Bridge	Mackinaw and St Ignace, MI	1158.0	5.8174, -84.7278
// George Washington Bridge	New York, NY and New Jersey, NJ	1067.0	40.8517, -73.9527
// Tacoma Narrows Bridge	Tacoma and Kitsap, WA	853.44	47.2690, -122.5517//

let bridgeList=[
    {name:'Verrazano-Narrows Bridge', location:'New York, NY',span: '1298.4', coordinates: [40.6066, -74.0447]},
    {name:'Golden Gate Bridge', location:'San Francisco and Marin, CA',span: '1280.2', coordinates: [37.8199, -122.4783]},
    {name:'Mackinac Bridge Mackinaw', location:'St Ignace, MI',span: '1158.0', coordinates: [45.8174, -84.7278]},
    {name:'George Washington Bridge', location:'New York, NY and New Jersey, NJ',span: '1067.0', coordinates: [40.8517, -73.9527]},
    {name:'Tacoma Narrows Bridge', location:'Tacoma and Kitsap, WA',span: '853.44', coordinates: [47.2690, -122.5517]}
]

let bridgeNames =[]//setting up an empty bridge names array
let bridgeSpans=[]//setting up an empty bridge span array

bridgeList.forEach(function (bridgeObject) {// for loop to get names, coordinates and spaj
    let bridgeName=bridgeObject.name;
    let bridgeCoordinates=bridgeObject.coordinates;
    let bridgeSpan=bridgeObject.span;
    bridgeNames.push(bridgeName);// pushing the names to the bridgeNames array
    bridgeSpans.push(bridgeSpan)//pushing span to the array to be used on the chart

    let bridgeMarker= L.marker(bridgeCoordinates,{icon:bridgeIcon});//adding the marker and icon the map
    bridgeMarker.addTo(bridgeMap);
    bridgeMarker.bindPopup(`${bridgeName} with span of ${bridgeSpan} meters`);

})




//this code is for the chart
let canvas=document.querySelector('#span-chart');
let context=canvas.getContext('2d');
let bridgeChart=new Chart(context,{
    type: 'bar',
    data: {
        labels:bridgeNames,
        datasets: [{
            label:'Span in meters',
            data: bridgeSpans,
            backgroundColor:['red','blue','yellowgreen','green','yellow'],
        }]
    },
    options:{
        scales: {
            yAxes: [{
                ticks: {beginAtZero: true,}
            }]
        }
    }
});





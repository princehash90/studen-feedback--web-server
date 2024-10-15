/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
}

// TODO Extract the latitude value, and log it to the console.
let issPossition=iss_location.iss_position// extracting the latitude
console.log(`the latitude is ${issPossition}`) //logging into console
let latitude= issPossition.latitude//
console.log(`The latitude is ${latitude}`)//logging into console
// TODO Extract the longitude value, and log it to the console.
let longitude= issPossition.longitude//extracting the longitude
console.log(`The longitude is ${longitude}`)


/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHF=1.1787// adding the CHF to the Array
console.log(rates)
// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)
let audRate= rates.AUD// getting the rate of AUD in the object
console.log(audRate)
let Euro=100
let exchangeRate= audRate*Euro
console.log(exchangeRate)

/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
]

// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
cats_and_owners.push({name:'Taylor Swift',cat:'Meredith'})// adding taylor swift and her cat's name
// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
//   Each line should have a message like "Snoop Dogg's cat is called Miles Davis"

cats_and_owners.forEach(function (cat) {
    console.log(`${cat.name}'s cat is called ${cat.cat} `) //printing owner's name and cat name
})
// TODO print Gary Oldman's cat's name by reading the data in the appropriate array index, using [] notation

let garyCatInfo=cats_and_owners[1]
let garyCatName=garyCatInfo.cat
console.log(`Gary's cat name is ${garyCatName}`)

// TODO print Gary Oldman's cat's name by looping over the array until you find the object with name = "Gary Oldman"
cats_and_owners.forEach(function (cat) {
    let allNames=cat.name
    if (allNames==="Gary Oldman")
    console.log(cat.cat)
})

/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
}
// TODO print the full name of the Literature Nobel laureate.

let allLaureates = nobel_prize_winners_2017.prizes
let literatureArray= allLaureates[3]
let litWinner = literatureArray.laureates

let fullNameArray=[]
litWinner.forEach(function (literature) {
    let firstName=literature.firstname//storing the first name in a variable
    fullNameArray.push(firstName)//pushing the first name to empty array list
    let surName=literature.surname//saving the surname on a variable
    fullNameArray.push(surName)//adding to the empty array list
})

let fullNameString= fullNameArray.join(' ')//joining up the first and last name with space
console.log(fullNameString)//printing the full name

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
let physicInfo= allLaureates[0]
let physicLaureates= physicInfo.laureates
//console.log(physicLaureates)
physicLaureates.forEach(function (objectElement) {
    let id =objectElement.id
    console.log(id)
})

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
let catergories = allLaureates
catergories.forEach(function (catergoryElement) {
  let allCatergories= catergoryElement.category
    console.log(`${allCatergories}`)
})

// TODO write code to print the total number of prize categories

// TODO write code to count the total number of laureates from 2017.
let totalLaureates = 0
catergories.forEach(function (catergoryElement) {
    let laureatesForCategory = catergoryElement.laureates
    // how long is laureatesForCategory? Get the length
    let laureateLength= laureatesForCategory.length

    // add to totalLaureates
})
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.

// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   // this function can be considered unessasary
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {  //call function in script.js
//    first two are the document paramater as is and the faultyItems div is what list is
   //part 2 (validation) a. every field needs an entry or send alert. b.  strings for names and numbers for fuel and cargo lvl 
   //part 3 (update ready n not listis [claimed to be literally most of the code]) 
   //& part 4 too maybe (indicate list changes and ready status on the page and css with dom)
   //build with varriables passed in
   //big if/elseif


   //c1 error condition: if any value is empty, send simple alert instead. say: "ALL Fields Required"
   alert("All Fields Required"); 
   //select html elemnts first
}//c2 error condition: make sure the data is string or number, use is NaN, send better alert if incorrect
//c3 elseif sofarsogood, assume validation is correct and process comparisons
//since everyting else on is correct conditions, embed in c3
//what if fuel level and cargo are not in range (both <10k, both>10k ,fl>10k,c>10k)
// in any of this, list param faulty items becomes visible. with the dom
// pilot and copilot status text should be updated with a template literal.
//update the html elements on the page, how? seek book and html tags probably

//before launchstatus besaying ready for launch, what does it mean to be ready fir launch? enough fuel, low enough cargo mass basicaly

//update color too


async function myFetch() {   //part 5 last part, somewhat seperate
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });
//finish code above
    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

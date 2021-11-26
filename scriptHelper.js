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

function validateInput(testInput) {/*this function can be considered unessasary*/ console.log("unused function called");}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//first two are the document paramater as is and the faultyItems div is what list is
    let bananAlert = "Pilot and Copilot feilds need to be names and Fuel Level and Cargo Mass fields need to be Numbers";
    let afr = "ALL Fields Required!"; //1 use
if (/*any value is empty*/pilot===""||copilot===""||fuelLevel===""||cargoLevel===""){alert(afr);}
else if((!isNaN(pilot))||(!isNaN(copilot))||isNaN(fuelLevel)||isNaN(cargoLevel)){alert(bananAlert);}
else{//since everyting else on is correct conditions, embed here in c3
    
//goal 3 and c3 elseif sofarsogood, assume validation is correct and process comparisons
    //what if fuel level and cargo are not in range (both <10k, both>10k ,fl>10k,c>10k)
    //before launchstatus besaying ready for launch, what does it mean to be ready for launch?
    //enough fuel, low enough cargo mass basicaly..
//part 3 (update ready n not listis [claimed to be literally most of the code]) 
    // in any of this, list param faulty items becomes visible. with the dom
    // pilot and copilot status text should be updated with a template literal.
 //part 4 (figure out list varriable and indicate list changes and ready status on the page and css with dom)
    //update the html elements on the page, how? seek book and html tags probably & update color too (red?)
    alert("end of formSubmission function");
}
}

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
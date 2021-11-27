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
    let fuelMin = 10000;
    let cargoMax = 10000;
    let fuelReady= false;
    let cargoReady = false; 
    let readyForLaunch =false;
if (/*any value is empty*/pilot===""||copilot===""||fuelLevel===""||cargoLevel===""){alert(afr);}
else if((!isNaN(pilot))||(!isNaN(copilot))||isNaN(fuelLevel)||isNaN(cargoLevel)){alert(bananAlert);}
else{if (fuelLevel>fuelMin){fuelReady = true;}
if (cargoLevel<cargoMax){cargoReady = true;}
alert("update lines 1 and 2 with name template literals to start");  //update part 4
if (cargoReady === false && fuelReady === false){
    alert("update line3&4");          //update in part 4
    readyForLaunch = false;
} else if(cargoReady === false && fuelReady === true){
    alert("update line4");          //update in part 4
    readyForLaunch = false;
}else if(fuelReady === false && cargoReady === true){
alert("update line3");     //update in part 4
readyForLaunch = false;
}else{
  readyForLaunch = true;
    alert("ready!");
}
if (readyForLaunch)
{
    // show ready in green
}else{
    //show not ready in red
}
    list.style.visibility="visible";
}
}

async function myFetch() {   //goal 6 & part 5 last part
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
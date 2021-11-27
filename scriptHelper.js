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
    let bananAlert = "Pilot and Copilot feilds need to be names and Fuel Level and Cargo Mass fields need to be Numbers";
    let afr = "ALL Fields Required!"; //1 use
    let fuelMin = 10000;
    let cargoMax = 10000;
    let fuelReady= false;
    let cargoReady = false; 
    let readyForLaunch =false;
    let launchStatus = document.getElementById("launchStatus");
if (/*any value is empty*/pilot===""||copilot===""||fuelLevel===""||cargoLevel===""){alert(afr);}
else if((!isNaN(pilot))||(!isNaN(copilot))||isNaN(fuelLevel)||isNaN(cargoLevel)){alert(bananAlert);}
else{if (fuelLevel>fuelMin){fuelReady = true;}
if (cargoLevel<cargoMax){cargoReady = true;}
document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot} is ready for launch`;
if (cargoReady === false && fuelReady === false){
      document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
     document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
     readyForLaunch = false;
} else if(cargoReady === false && fuelReady === true){
    document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
    document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    readyForLaunch = false;
}else if(fuelReady === false && cargoReady === true){
    document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass is low enough for launch";
readyForLaunch = false;
}else{
    document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass is low enough for launch";
  readyForLaunch = true;
    alert("ready!");
}
if (readyForLaunch){
    document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
    launchStatus.style.color = "green";
}else{
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
   launchStatus.style.color = "red";
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
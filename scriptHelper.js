require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {/*also considered unessasary*/}
function validateInput(testInput) {/*this function can be considered unessasary*/ console.log("unused function called"); }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let bananAlert = "Pilot and Copilot feilds need to be names and Fuel Level and Cargo Mass fields need to be Numbers";
    let afr = "ALL Fields Required!";
    let fuelMin = 10000;
    let cargoMax = 10000;
    let fuelReady = false;
    let cargoReady = false;
    let readyForLaunch = false;
    let launchStatus = document.getElementById("launchStatus");
    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") { alert(afr); }
    else if ((!isNaN(pilot)) || (!isNaN(copilot)) || isNaN(fuelLevel) || isNaN(cargoLevel)) { alert(bananAlert); }
    else {
        if (fuelLevel > fuelMin) { fuelReady = true; }
        if (cargoLevel < cargoMax) { cargoReady = true; }
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot} is ready for launch`;
        if (cargoReady === false && fuelReady === false) {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            readyForLaunch = false;
        } else if (cargoReady === false && fuelReady === true) {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            readyForLaunch = false;
        } else if (fuelReady === false && cargoReady === true) {
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass is low enough for launch";
            readyForLaunch = false;
        } else {
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass is low enough for launch";
            readyForLaunch = true;
        }
        if (readyForLaunch) {
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
        } else {
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        }
        list.style.visibility = "visible";
    }
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });
    return planetsReturned;
}

function pickPlanet(planets) {
let index = Math.floor(Math.random()*planets.length);
   return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
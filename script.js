window.addEventListener("load", function () {
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let planet = pickPlanet(listedPlanets);
   document.getElementById("missionTarget").innerHTML =`<h2>Mission Destination</h2>
       <ol>
       <li>Name: ${planet.name}</li>
       <li>Diameter: ${planet.diameter}</li>
       <li>Star: ${planet.star}</li>
       <li>Distance from Earth: ${planet.distance}</li>
       <li>Number of Moons: ${planet.moons}</li>
       </ol>
       <img src="${planet.image}">`
    })
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let faultyItems = document.querySelector('#faultyItems');
        let pilotName = document.getElementById('pilotName').value;
        let copilotName = document.querySelector('input[name="copilotName"]').value;
        let fuelLevel = document.querySelector('input[name="fuelLevel"]').value;
        let cargoMass = document.querySelector('input[name="cargoMass"]').value;
        formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);
    });
});
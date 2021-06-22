// Write your JavaScript code here!

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[1].name}</li>
            <li>Diameter: ${json[1].diameter}</li>
            <li>Star: ${json[1].star}</li>
            <li>Distance from Earth: ${json[1].distance}</li>
            <li>Number of Moons: ${json[1].moons}</li>
         </ol>
         <img src="${json[1].image}"></img>`
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let allFieldsFilledIn = false;
      let allValidInfo = false;

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         
      } else {
         allFieldsFilledIn = true;
      }
      if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Make sure to enter valid information for each field!")
      } else {
         allValidInfo = true;
      }

      if (allFieldsFilledIn && allValidInfo) {
         console.log("Form Submitted Successfully!")
         
         document.getElementById("faultyItems").style.visibility = "visible";

         let pilotStatus = document.getElementById("pilotStatus");
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         let copilotStatus = document.getElementById("copilotStatus");
         copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch`;

         let launchStatus = document.getElementById("launchStatus");
         if (fuelLevel.value < 10000) {
            //document.getElementById("faultyItems").style.visibility = "visible";
            let fuelStatus = document.getElementById("fuelStatus");
            fuelStatus.innerHTML = "Fuel level is too low for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
         }
         if (cargoMass.value > 10000) {
            //document.getElementById("faultyItems").style.visibility = "visible";
            let cargoStatus = document.getElementById("cargoStatus");
            cargoStatus.innerHTML = "Cargo Mass is too high for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
         }
         if(fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
            //document.getElementById("faultyItems").style.visibility = "hidden";
         }
      }

   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

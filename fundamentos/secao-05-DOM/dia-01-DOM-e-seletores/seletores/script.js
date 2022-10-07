const header = document.getElementById("header-container");
header.style.backgroundColor = "green";

const emergency = document.querySelector(".emergency-tasks");
emergency.style.backgroundColor = "orange";
const emergencyHeadings = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < emergencyHeadings.length; i += 1) {
    emergencyHeadings[i].style.backgroundColor = "purple";
}

const noEmergency = document.querySelector(".no-emergency-tasks");
noEmergency.style.backgroundColor = "yellow";
const noEmergencyHeadings = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < noEmergencyHeadings.length; i += 1) {
    noEmergencyHeadings[i].style.backgroundColor = "black";
}

const footer = document.getElementsByTagName("footer");
footer[0].style.backgroundColor = "blue";
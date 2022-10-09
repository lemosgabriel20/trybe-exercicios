// queries retornam uma NodeList
// getElements retornam uma HTMLColletion


const paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";

const classico  = document.getElementsByClassName("classico");
    classico[0].style.color = "blue";

const subtitle = document.getElementsByTagName("p");
    subtitle[1].style.color = "green";
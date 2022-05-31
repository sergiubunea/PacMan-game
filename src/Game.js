//referinta in html la gameCanvas
const canvas = document.getElementById("gameCanvas");

const  ctx = canvas.getContext('2d');

//functie pt redesenare ecran in fiecare secunda
function gameLoop(){
       console.log("game loop");
}

//setare interval de timp 1000 ms = 1s, pot apela metoda asta de 75 de ori /s, ca sa redesenez ecranul
setInterval(gameLoop, 1000/75)
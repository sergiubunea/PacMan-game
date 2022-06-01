import TileMap from "./TileMap.js";

//referinta in html la gameCanvas
const tileSize = 32;
const viteza = 2;
const canvas = document.getElementById("gameCanvas");
const  ctx = canvas.getContext("2d");
const tileMap = new TileMap(tileSize);
const pacman = tileMap.getPacman(viteza);

//functie pt redesenare ecran in fiecare secunda
function gameLoop(){
       tileMap.draw(ctx);
       pacman.draw(ctx);
}
tileMap.setCanvasSize(canvas);

//setare interval de timp 1000 ms = 1s, pot apela metoda asta de 75 de ori /s, ca sa redesenez ecranul
setInterval(gameLoop, 1000/75)
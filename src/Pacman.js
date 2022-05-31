export default class Pacman{
    constructor(x, y, tileSize, viteza, tileMap) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.viteza = viteza;
        this.tileMap = tileMap;
        this.#loadPacmanImages();
    }

    draw(ctx) {
        ctx.drawImage(this.pacmanImages[this.pacmanIndex], this.x, this.y, this.tileSize, this.tileSize);
    }

    #loadPacmanImages() {
        const pacmanImage1 = new Image();
        pacmanImage1.src = "../images/pac0.png";

        const pacmanImage2 = new Image();
        pacmanImage2.src = "../images/pac1.png";

        const pacmanImage3 = new Image();
        pacmanImage3.src = "../images/pac2.png";

        const pacmanImage4 = new Image();
        pacmanImage4.src = "../images/pac1.png";

        this.pacmanImages = [pacmanImage1, pacmanImage2, pacmanImage3, pacmanImage4];
        this.pacmanIndex = 0;
    }

}
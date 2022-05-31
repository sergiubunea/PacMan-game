import Direction from "./Direction.js";

export default class Pacman{
    constructor(x, y, tileSize, viteza, tileMap) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.viteza = viteza;
        this.tileMap = tileMap;

        this.currentDirection = null;
        this.requestDirection = null;

        document.addEventListener("keydown", this.#keydown);

        this.#loadPacmanImages();
    }

    draw(ctx) {
        this.#move();
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

    #keydown= (event) => {
        //up
        if(event.keyCode == 38) {
            if(this.currentDirection == Direction.down){
                this.currentDirection = Direction.up;
            }
            this.requestDirection = Direction.up;
        }
        //down
        if(event.keyCode == 40) {
            if(this.currentDirection == Direction.up){
                this.currentDirection = Direction.down;
            }
            this.requestDirection = Direction.down;
        }
        //left
        if(event.keyCode == 37) {
            if(this.currentDirection == Direction.right){
                this.currentDirection = Direction.left;
            }
            this.requestDirection = Direction.left;
        }
        //right
        if(event.keyCode == 39) {
            if(this.currentDirection == Direction.left){
                this.currentDirection = Direction.right;
            }
            this.requestDirection = Direction.right;
        }
    };

    #move() {

        if(this.currentDirection !== this.requestDirection){
            if(Number.isInteger(this.x / this.tileSize) && Number.isInteger(this.y / this.tileSize)) {
                this.currentDirection = this.requestDirection;
            }
        }

        switch(this.currentDirection){
            case Direction.up:
                this.y -= this.viteza;
                break;
            case Direction.down:
                this.y += this.viteza;
                break;  
        }
    }

}
import Direction from "./Direction.js";

export default class Enemy {
    constructor(x, y, tileSize, viteza, tileMap) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.viteza = viteza;
        this.tileMap = tileMap;

        this.direction = Math.floor(Math.random() * Object.keys(Direction).length);
        this.directionTimeDefault = this.#random(5, 60)


        this.#loadImages();
    }

    draw(ctx) {
        this.#move();
        ctx.drawImage(this.image, this.x, this.y, this.tileSize, this.tileSize);
    }

    #move() {
        if(!this.tileMap.didCollideWithEnviroment(this.x, this.y, this.Direction)) {
            switch(this.Direction) {
                case Direction.up:
                    this.y -= this.viteza;
                    break;
                case Direction.down:
                    this.y += this.viteza;
                    break;
                case Direction.left:
                    this.x -= this.viteza;
                    break;
                case Direction.right:
                    this.x += this.viteza;
                    break;
            }
        }
    }

    #random(min, max) {
        return Math.floor(Math.random() * (max + 1)) + min;
    }

    #loadImages() {
        this.normalGost = new Image();
        this.normalGost.src = '../images/ghost.png';

        this.scaredGost = new Image();
        this.scaredGost.src = '../images/scaredGhost.png';

        this.scaredGost2 = new Image();
        this.saredGost2.src = '../images/scaredGhost2.png';

        this.image = this.normalGost;
    }
}
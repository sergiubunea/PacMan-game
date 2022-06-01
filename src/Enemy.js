export default class Enemy {
    constructor(x, y, tileSize, viteza, tileMap) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.viteza = viteza;
        this.tileMap = tileMap;

        this.#loadImages();
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.tileSize, this.tileSize);
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
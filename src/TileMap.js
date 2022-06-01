import Pacman from './Pacman.js';
import Direction from './Direction.js';

export default class TileMap{
    constructor(tileSize) {
        this.tileSize = tileSize;
        this.yellowDot = new Image();
        this.yellowDot.src = '../images/yellowDot.png';

        this.wall = new Image();
        this.wall.src = '../images/wall.png';

    }
    //1 pt pereti, o pt puncte, 4 pt pacman, 4 pt spatiu gol
    map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
        [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];

    draw(ctx) {
        for(let i = 0; i < this.map.length; i ++)
        {
            for(let j = 0; j < this.map[i].length; j ++ )
            {
                let tile = this.map[i][j];
                if(tile === 1){
                    this.#drawWall(ctx, j, i, this.tileSize);
                }
                else if(tile === 0) {
                    this.#drawDot(ctx, j, i, this.tileSize);
                }
                // else {
                //     this.#drawBlank(ctx, j, i, this.tilesize);
                // }

                //ctx.strokeStyle = "yellow";
                //ctx.strokeRect(j * this.tileSize, i * this.tileSize, this.tileSize, this.tileSize);
            }
        }
    }

    #drawDot(ctx, j, i, size) {
        ctx.drawImage(this.yellowDot, j * this.tileSize, i*this.tileSize, size, size);
    }

    #drawWall(ctx, j, i, size) {
        ctx.drawImage(this.wall, j * this.tileSize, i*this.tileSize, size, size);
    }

    // #drawBlank(ctx, j, i, size) {
        
    //     ctx.fillRect (j * this.tileSize, i * this.tileSize, size, size);
    //     ctx.fillStyle = "black";
    // }

    getPacman(viteza) {
        for(let i = 0; i < this.map.length; i ++) {
            for(let j = 0; j< this.map[i].length; j ++) {
                let tile = this.map[i][j];
                if(tile === 4) {
                    this.map[i][j] = 0;
                    return new Pacman(j * this.tileSize, i * this.tileSize, this.tileSize, viteza, this); 
                }
            }        
        }
    }

    //setez dimensiunile mapei dupa array-ul declarat
    setCanvasSize(canvas) {
        canvas.width = this.map[0].length * this.tileSize;
        canvas.height = this.map.length * this.tileSize;
    }

    didCollideWithEnviroment(x, y, direction) {
        if (direction == null) {
            return;
        }

        if(Number.isInteger(x / this.tileSize) && Number.isInteger(y / this.tileSize)) {
            let j = 0;
            let i = 0;
            let next_j = 0;
            let next_i = 0;

            switch(direction) {
                case Direction.right:
                    next_j = x + this.tileSize;
                    j = next_j/this.tileSize;
                    i = y / this.tileSize;
                    break;
                case Direction.left:
                    next_j = x - this.tileSize;
                    j = next_j/this.tileSize;
                    i = y / this.tileSize;
                    break;
                case Direction.up:
                    next_i = y - this.tileSize;
                    i = next_i/this.tileSize;
                    j = x / this.tileSize;
                    break;
                case Direction.down:
                    next_i = y + this.tileSize;
                    i = next_i/this.tileSize;
                    j = x / this.tileSize;
                break;
            }
            const tile = this.map[i][j];
            if(tile === 1) {
                return true;
            }
        }

        return false;
    }

    eatDot (x, y) {
        const i = y / this.tileSize;
        const j = x / this.tileSize;
        if(Number.isInteger(i) && Number.isInteger(j)) {
            if(this.map[i][j] === 0) {
                this.map[i][j] = 5;
                return true;
            }
        }
        return false;
    }
}
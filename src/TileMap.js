export default class TileMap{
    constructor(tileSize) {
        this.tileSize = tileSize;
        this.yellowDot = new Image();
        this.yellowDot.src = '../images/yellowDot.png';

        this.wall = new Image();
        this.wall.src = '../images/wall.png';

    }

    map = [
        [1, 1, 1, 1, 1, 1, 1 , 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1 , 1, 1, 1, 1, 1, 1],
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
            }
        }
    }

    #drawDot(ctx, j, i, size) {
        ctx.drawImage(this.yellowDot, j * this.tileSize, i*this.tileSize, size, size);
    }

    #drawWall(ctx, j, i, size) {
        ctx.drawImage(this.wall, j * this.tileSize, i*this.tileSize, size, size);
    }

//setez dimensiunile mapei dupa array-ul declarat
    setCanvasSize(canvas) {
        canvas.width = this.map[0].length * this.tileSize;
        canvas.height = this.map.length * this.tileSize;
    }
}
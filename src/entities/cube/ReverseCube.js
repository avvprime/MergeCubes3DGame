import Cube from "./Cube.js";

export default class ReverseCube extends Cube{
    constructor(gameOBJ)
    {
        super(gameOBJ);
        this.material.color.setHex(0xff172e);
    }

    makeMove(dir)
    {
        if (this.moveEnabled) return; // it's already moving
        switch (dir) {
            case this.DIR.UP:
                if (this.rowIdx === this.rowCount -1) return;
                if (this.game.currentLevelGrid[this.rowIdx + 1][this.colIdx] === 9) return;
                this.nextPos = new this.game.THREE.Vector3(0, 0, 1.8).add(this.position);
                this.rowIdx += 1;
                break;
            case this.DIR.DOWN:
                if (this.rowIdx === 0) return;
                if (this.game.currentLevelGrid[this.rowIdx - 1][this.colIdx] === 9) return;
                this.nextPos = new this.game.THREE.Vector3(0, 0, -1.8).add(this.position);
                this.rowIdx -= 1;
                break;
            case this.DIR.LEFT:
                if (this.colIdx === this.columnCount - 1) return;
                if (this.game.currentLevelGrid[this.rowIdx][this.colIdx + 1] === 9) return;
                this.nextPos = new this.game.THREE.Vector3(1.8, 0, 0).add(this.position);
                this.colIdx += 1;
                break;
            case this.DIR.RIGHT:
                if (this.colIdx === 0) return;
                if (this.game.currentLevelGrid[this.rowIdx][this.colIdx - 1] === 9) return;
                this.nextPos = new this.game.THREE.Vector3(-1.8, 0, 0).add(this.position);
                this.colIdx -= 1;
                break;
            default:
                break;
        }
        this.moveEnabled = true;
    }
}

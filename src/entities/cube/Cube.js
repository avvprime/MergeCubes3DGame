import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three';

export default class Cube extends Mesh{

    moveEnabled = false;
    isActive = false;
    
    DIR = {
        UP: 1,
        DOWN: 2,
        LEFT: 3,
        RIGHT: 4
    }

    constructor(gameOBJ)
    {
        super( new BoxGeometry(1, 1, 1), new MeshStandardMaterial() );
        this.castShadow = true;
        this.game = gameOBJ;
        this.input = this.game.input;
        this.loopID = this.game.loop.addUpdate(this.update.bind(this));
        this.moveEnabled = false;
        this.moveTimer = 0;
        this.moveDuration = 0.2;

        this.stepOneDuration = 0.1;
        this.stepTwoDuration = 0.5;

        this.stepOneMoveTime = 0;
        this.stepTwoMoveTime = 0;

        this.isAnimating = false;
    }

    lerp(a, b, t) { return a + (b-a) * t }
    flip(t) { return 1 - t }
    easeIn(t) { return t * t }
    easeOut(t) { return this.flip(Math.sqrt(this.flip(t))) }

    move(dir)
    {
        this.makeMove(dir);
        setTimeout(() => {
            if ( !this.moveEnabled ) return;
            this.game.currentLevelGridOBJ[this.rowIdx][this.colIdx].pressed = true;
            this.stepOneMoveTime = 0;
            this.stepTwoMoveTime = 0;
            this.isAnimating = true;
        }, 30);
    }

    makeMove(dir)
    {

    }

    setActive(x, y, z, parent, rowIdx, colIdx)
    {
        parent.add(this);
        this.position.set(x, y, z);
        this.isActive = true;
        this.rowCount = this.game.currentLevelGrid.length;
        this.columnCount = this.game.currentLevelGrid[0].length;
        this.rowIdx = rowIdx;
        this.colIdx = colIdx;
    }

    setInactive()
    {
        this.parent.remove(this);
        this.isActive = false;
    }

    update(dt)
    {
        if (!this.isActive) return;

        if (this.isAnimating) this.verticalAnimate(dt);

        if (!this.moveEnabled) return;

        if(this.moveTimer < this.moveDuration)
        {
            this.position.lerp(this.nextPos, this.easeOut(this.moveTimer / this.moveDuration))
            this.moveTimer += dt;
            return;
        }

        this.moveTimer = 0;
        this.moveEnabled = false;
        
    }

    verticalAnimate(dt)
    {
        if(this.stepOneMoveTime < this.stepOneDuration)
        {
            this.position.y = this.lerp(this.position.y, 0.4, this.stepOneMoveTime/this.stepOneDuration);
            this.stepOneMoveTime += dt;
            return;
        }

        if (this.stepTwoMoveTime < this.stepTwoDuration)
        {
            this.position.y = this.lerp(this.position.y, 0.6, this.stepTwoMoveTime/this.stepTwoDuration);
            this.stepTwoMoveTime += dt;
            return;
        }

        this.isAnimating = false;
        this.stepOneMoveTime = 0;
        this.stepTwoMoveTime = 0;
    }
}
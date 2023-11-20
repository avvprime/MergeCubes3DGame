import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three';

export default class Pad extends Mesh{
    constructor(gameOBJ)
    {
        //super(new BoxGeometry(1.6, 0.2, 1.6), new MeshStandardMaterial( {color: 0x9150e9} ));
        super(new BoxGeometry(1.6, 0.2, 1.6), new MeshStandardMaterial( {color: 0x4b4752 } ));
        this.receiveShadow = true;

        this.game = gameOBJ;
        this.loopID = this.game.loop.addUpdate(this.update.bind(this));
        this.isActive = false;
        this.pressed = false;
    
        this.rowIdx = 0;
        this.colIdx = 0;

        this.stepOneDuration = 0.1;
        this.stepTwoDuration = 0.5;

        this.stepOneMoveTime = 0;
        this.stepTwoMoveTime = 0;
    }

    lerp(a, b, t) { return a + (b-a) * t }

    update(dt)
    {
        if (!this.isActive) return;
        if (!this.pressed) return;

        if(this.stepOneMoveTime < this.stepOneDuration)
        {
            this.position.y = this.lerp(this.position.y, -0.1, this.stepOneMoveTime/this.stepOneDuration);
            this.stepOneMoveTime += dt;
            return;
        }

        if (this.stepTwoMoveTime < this.stepTwoDuration)
        {
            this.position.y = this.lerp(this.position.y, 0, this.stepTwoMoveTime/this.stepTwoDuration);
            this.stepTwoMoveTime += dt;
            return;
        }

        this.pressed = false;
        this.stepOneMoveTime = 0;
        this.stepTwoMoveTime = 0;

    }

    setActive(x, y, z, parent, rowIdx, colIdx)
    {
        parent.add(this);
        this.position.set(x, y, z);
        this.isActive = true;
        this.game.currentLevelGridOBJ[rowIdx][colIdx] = this;
        this.rowIdx = rowIdx;
        this.colIdx = colIdx;
    }

    setInactive()
    {
        this.parent.remove(this);
        this.isActive = false;
    }
}

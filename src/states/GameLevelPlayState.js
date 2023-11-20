import GameState from "./GameState.js";


export default class GameLevelPlayState extends GameState{
    
    Commands = {
        UP: 1,
        DOWN: 2,
        LEFT: 3,
        RIGHT: 4
    }

    constructor(gameOBJ)
    {
        super(gameOBJ);
    }

    enter()
    {
        console.log("Game Play State Started...")
        this.game.cubePool.prepareCubes();
    }

    exit()
    {
        console.log("Game Play State Finished...")
    }

    update(dt)
    {

       const command = this.handleInput();
       if (!command) return;
       
       const totalCubes = this.game.cubePool.totalActiveCubes
       for(let i = 0; i < totalCubes; i++)
       {
        this.game.cubePool.activeCubes[i].move(command);
       }
    }

    handleInput()
    {
        if (this.game.input.justPressed.KeyW) return this.Commands.UP;
        else if (this.game.input.justPressed.KeyS) return this.Commands.DOWN;
        else if (this.game.input.justPressed.KeyA) return this.Commands.LEFT;
        else if (this.game.input.justPressed.KeyD) return this.Commands.RIGHT;
        else return null;
    }


    draw()
    {
        this.game.renderer.render(this.game.scene, this.game.camera);
    }

}
import GameState from "./GameState.js";

export default class GameLoadState extends GameState{
    constructor(gameOBJ)
    {
        super(gameOBJ);
    }

    enter()
    {
        console.log("Game Load State Started...");
        this.game.changeState(this.game.States.INIT);
    }

    exit()
    {
        console.log("Game Load State Finished...")
        
    }


}
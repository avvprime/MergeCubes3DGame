import GameState from "./GameState.js";
import LEVELS from "../Levels.js";



export default class GameLevelPrepareState extends GameState{
    constructor(gameOBJ)
    {
        super(gameOBJ);
    }

    enter()
    {
        console.log("Game Level Prepare State Started...");

        const isCubesPoolEmpty = [
            0,
            this.game.cubePool[1].cubes.length,
            this.game.cubePool[2].cubes.length,
            this.game.cubePool[3].cubes.length,
            this.game.cubePool[4].cubes.length
        ]
        const isPadPoolEmpty = this.game.padPool.pads.length;

        const levelData = LEVELS[this.game.getCurrentLevel()];
        const gridMap = levelData.grid;
        this.game.currentLevelGrid = gridMap;
        this.game.currentLevelGridOBJ = gridMap;
        const rows = gridMap.length;
        const columns = gridMap[0].length;
        const gridSize = 1.8;

        const container = new this.game.THREE.Group();

        for(let i = 0; i < rows; i++)
        {
            for(let j = 0; j < columns; j++)
            {
                const data = gridMap[i][j];
                if (data === 9) continue;

                !isPadPoolEmpty 
                ? this.game.padPool.generatePad(this.game, j * gridSize, 0, i * gridSize, container, i, j) 
                : this.game.padPool.preparePad(j * gridSize, 0, i * gridSize, container, i, j);

                if (data === 0) continue;

                !isCubesPoolEmpty[data] // I don't like it but it's fine for now
                 ? this.game.cubePool.generateCube(data, this.game, j * gridSize, 0.6, i * gridSize, container, i, j)
                 : this.game.cubePool.prepareCube(data, j * gridSize, 0.6, i * gridSize, container, i, j);
            }
            
        }

        new this.game.THREE.Box3().setFromObject(container).getCenter(container.position).multiplyScalar(-1);
        this.game.scene.add(container);
        
        this.game.changeState(this.game.States.LEVEL_PLAY);
    }

    

    exit()
    {
        console.log("Game Level Prepare State Finished...")
    }


}
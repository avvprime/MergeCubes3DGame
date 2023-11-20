import * as THREE from 'three';

import Pad from "./entities/pad/Pad.js";

import RegularCube from "./entities/cube/RegularCube.js";
import ReverseCube from './entities/cube/ReverseCube.js';
import RegularDoubleCube from './entities/cube/RegularDoubleCube.js';
import ReverseDoubleCube from './entities/cube/ReverseDoubleCube.js';

import GameState from "./states/GameState.js";
import GameLoadState from './states/GameLoadState.js';
import GameInitState from './states/GameInitState.js';
import GameLevelPrepareState from './states/GameLevelPrepareState.js';
import GameLevelPlayState from './states/GameLevelPlayState.js';

export default class Game{
    
    #state = new GameState();

    States = {
        LOAD: new GameLoadState(this),
        INIT: new GameInitState(this),
        LEVEL_PREPARE: new GameLevelPrepareState(this),
        LEVEL_PLAY: new GameLevelPlayState(this),
        LEVEL_WIN: 4,
        LEVEL_LOSE: 5,
        BREAK: 6,
        AD_BREAK_PREPARE: 7,
        AD_BREAK: 8,
        AD_BREAK_FINISH: 9,
        FINISH: 10
    }

    #currentLevel = 14;
    #lastReachedLevel = 1;
    #totalLevels = 61;

    currentLevelGrid = undefined; // just numbers
    currentLevelGridOBJ = undefined; // for objects

    padPool = {
        pads: [],
        preparePad: function(x, y, z, parent, rowIdx, colIdx) {
            const pads = this.pads;
            const _len = pads.length;
            for(let i = 0; i < _len; i++){
                if (pads[i].isActive) continue;
                pads[i].setActive(x, y, z, parent, rowIdx, colIdx);
                break;
            }
        },
        generatePad: function(gameOBJ, x, y, z, parent, rowIdx, colIdx) {
            const pad = new Pad(gameOBJ);
            pad.setActive(x, y, z, parent, rowIdx, colIdx);
            this.pads.push(pad);
        }
    };
    cubePool = {
        1: {
            cubes: [],
            create: (gameOBJ) => { return new RegularCube(gameOBJ) }
        },
        2: {
            cubes: [],
            create: (gameOBJ) => { return new ReverseCube(gameOBJ) }
        },
        3: {
            cubes: [],
            create: (gameOBJ) => { return new RegularDoubleCube(gameOBJ) }
        },
        4: {
            cubes: [],
            create: (gameOBJ) => { return new ReverseDoubleCube(gameOBJ) }
        },
        activeCubes: [],
        totalActiveCubes: 0,
        prepareCubes: function() {
            for (let i = 1; i < 5; i++) this.activeCubes.push(...this[i].cubes.filter(cube => {return cube.isActive}));
            this.totalActiveCubes = this.activeCubes.length;
        },
        prepareCube: function(type, x, y, z, parent, rowIdx, colIdx) 
        {
            const cubes = this[type].cubes;
            const _len = cubes.length;
            for (let i = 0; i > _len; i++){
                if (cubes[i].isActive) continue;
                cubes[i].setActive(x, y, z, parent, rowIdx, colIdx);
                break;
            }
        },
        generateCube: function(type, gameOBJ, x, y, z, parent, rowIdx, colIdx) {
            const cube = this[type].create(gameOBJ);
            cube.setActive(x, y, z, parent, rowIdx, colIdx);
            this[type].cubes.push(cube);
        }
    };

    constructor()
    {
        this.THREE = THREE;
        this.changeState(this.States.LOAD);
    }

    changeState(_state)
    {
        this.#state.exit();
        this.#state = _state;
        this.#state.enter();
    }

    update(dt)
    {
        this.#state.update(dt);
    }

    draw()
    {
        this.#state.draw();
    }

    getCurrentLevel() { return this.#currentLevel }

    onResize()
    {
        const aspect = window.innerWidth / window.innerHeight;
        this.camera.aspect = aspect;
        this.camera.left = this.size * aspect / -2;
        this.camera.right = this.size * aspect / 2;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

}
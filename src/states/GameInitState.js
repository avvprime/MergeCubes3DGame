import GameState from "./GameState.js";
import LoopManager from "../utils/LoopManager.js";
import InputManager from "../utils/InputManager.js";
import { OrbitControls } from "three/addons/controls/OrbitControls";




export default class GameInitState extends GameState{
    constructor(gameOBJ)
    {
        super(gameOBJ);
    }

    enter()
    {
        console.log("Game Init State Started...")

        this.game.renderer = new this.game.THREE.WebGLRenderer( { antialias: true } );
        this.game.renderer.setSize(window.innerWidth, window.innerHeight);
        this.game.renderer.shadowMap.enabled = true;
        //0x4287f5
        this.game.renderer.setClearColor(0x9150e9 , 1 );
        document.body.appendChild(this.game.renderer.domElement);

        this.game.scene = new this.game.THREE.Scene();

        this.game.size = 100;
        const aspect = window.innerWidth / window.innerHeight;
        this.game.camera = new this.game.THREE.OrthographicCamera(
            this.game.size * aspect / -2, this.game.size * aspect / 2,
            this.game.size / 2, this.game.size / -2,
            0.1, 1000
        );

        this.game.camera.position.set(-5.5, 4.5, 5.5);
        // this.game.camera.rotation.set(-0.6188623548530789, -0.9067693377896237, -0.5535029458507399);
        this.game.camera.zoom = 8;
        this.game.camera.lookAt(new this.game.THREE.Vector3(0, 0, 0));
        this.game.camera.updateProjectionMatrix();

        const ambientLight = new this.game.THREE.AmbientLight(0xFFFFFF, 1.0);
        this.game.scene.add(ambientLight);

        const directionalLight = new this.game.THREE.DirectionalLight(0xffffff, 2.0);
        directionalLight.castShadow = true;
        directionalLight.position.set(-3, 10, 5);
        this.game.scene.add(directionalLight);

        this.game.input = InputManager;
        this.game.loop = LoopManager;
        // Loop
        this.game.updateID = this.game.loop.addUpdate(this.game.update.bind(this.game));
        this.game.drawID = this.game.loop.addDraw(this.game.draw.bind(this.game));

        window.addEventListener('resize', this.game.onResize.bind(this.game));


        //this.orbitControls = new OrbitControls(this.game.camera, this.game.renderer.domElement);

        this.game.changeState(this.game.States.LEVEL_PREPARE);
    }

    exit()
    {
        console.log("Game Init State Finished...");
        this.game.input.listen();
        this.game.loop.start();
    }


}

// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		//SceneManager.preload = this;
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("menu-asset-pack", "assets/menu-asset-pack.json");
		this.load.pack("scene-asset-pack", "assets/scene-asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// progress
		const progress = this.add.text(514, 418, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "color": "#39D9F5", "fontSize": "20px", "stroke": "#5E5EEF", "strokeThickness":1});

		// level_loader_01
		const level_loader_01 = this.add.sprite(512, 421, "loader_atlas", "level_loader0001");
		level_loader_01.scaleX = 0.75;
		level_loader_01.scaleY = 0.75;

		// progress (components)
		new PreloadText(progress);

		// level_loader_01 (components)
		const level_loader_01StartAnimation = new StartAnimation(level_loader_01);
		level_loader_01StartAnimation.animationKey = "anim_level_loader";

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();
		this.editorPreload();
		
		// load scen from file and add it to SceneManager
		AssetLoader.loadSceneFromFile(this, "Menu_001");
		AssetLoader.loadSceneFromFile(this, "Preloader");
		
		// load first level
		this.load.on(Phaser.Loader.Events.COMPLETE, () => {

			this.scene.start("Menu_001");	
		})
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


/*
this.time.addEvent({
	delay: 300,
	callback: ()=>{
		
		this.scene.start(levelName)
	},
	loop: false
})

this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Menu"));
Ctrace("SCENE");
console.dir(this.scene)
Ctrace("GAME");
console.dir(this.game)
Ctrace("GAME");
console.dir(this)
var game = this.game; // initialize
var scene = this.scene; // initialize key:Preload
var preload = this; // Preload
*/
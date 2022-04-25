
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class NavigateToScene extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__NavigateToScene"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {NavigateToScene} */
	static getComponent(gameObject) {
		return gameObject["__NavigateToScene"];
	}

	/** @type {Phaser.GameObjects.Text} */
	gameObject;
	/** @type {string} */
	instanceName = "";
	/** @type {string} */
	sceneName = "Menu_001";
	/** @type {number} */
	hitAreaScaleX = 1;
	/** @type {number} */
	hitAreaScaleY = 1;

	/* START-USER-CODE */
	awake(){
		// var game = this.gameObject.scene.game;
		var go = this.gameObject;
		/** @type {Phaser.Scenes.SceneManager} */
		var	sceneManager = this.gameObject.scene.scene;
		// expose variable to parent object
		go.instanceName = this.instanceName;
		// make gameObject interactive
		InteractiveArea.setInteractive(go, {x:this.hitAreaScaleX, y:this.hitAreaScaleY}, "rectangle");
		// register events
		go.on("pointerdown", () => {

			this.scene.add.tween({
				targets: go,
				scaleX: "*=0.8",
				scaleY: "*=0.8",
				duration: 80,
				yoyo: true
			});
		})
		.on('pointerup', () => { 

			if (!this.sceneName) return;

			Ctrace(this.constructor.name + " > awake > go:{0} scene:{1}", go.text, this.sceneName);
			if (this.sceneName == "Menu_001"){

				sceneManager.start(this.sceneName);

			} else {

				SceneManager.loadSceneByName(this.gameObject.scene, this.sceneName);
			}
		});		
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

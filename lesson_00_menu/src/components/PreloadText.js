/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class PreloadText extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__PreloadText"] = this;

		/* START-USER-CTR-CODE */
// Ctrace("PreloadText > waiting....")
		this.scene.load.on(Phaser.Loader.Events.PROGRESS, p => {
// Ctrace("PreloadText > on PROGRESS.... go:{0} p:{1}", this, p)
			this.gameObject.text = Math.floor(p * 100) + "%";
		});

		/* END-USER-CTR-CODE */
	}

	/** @returns {PreloadText} */
	static getComponent(gameObject) {
		return gameObject["__PreloadText"];
	}

	/** @type {Phaser.GameObjects.Text} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

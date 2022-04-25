
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class MovieClip extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__MovieClip"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {MovieClip} */
	static getComponent(gameObject) {
		return gameObject["__MovieClip"];
	}

	/** @type {Phaser.GameObjects.Container} */
	gameObject;
	/** @type {string} */
	nameK = "";

	/* START-USER-CODE */
	awake(){

		// expose params in to parent gameObject
		// this.gameObject.instanceName = this.instanceName;
		// this.gameObject.isLocked = this.isLocked;
		// Ctrace(this.constructor.name + " > awake > Component:{0} Type:{1} isLocked:{2}", this.instanceName, this.componentType, this.isLocked);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class DropZone extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__DropZone"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {DropZone} */
	static getComponent(gameObject) {
		return gameObject["__DropZone"];
	}

	/** @type {Phaser.GameObjects.Container} */
	gameObject;
	/** @type {"rectangle"|"circle"|"csutom"} */
	hitAreaType = "rectangle";
	/** @type {boolean} */
	offsetAtCenter = true;
	/** @type {number} */
	hitAreaScaleX = 1;
	/** @type {number} */
	hitAreaScaleY = 1;

	/* START-USER-CODE */
	awake(){

		//InteractiveArea.createDropArea(this.gameObject);
		var go = this.gameObject;
		// expose params to parent
		go.offsetAtCenter = this.offsetAtCenter;
		go.hitAreaType = this.hitAreaType;
		InteractiveArea.setInteractiveContainer(go, {x:this.hitAreaScaleX, y:this.hitAreaScaleY}, "rectangle", true);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

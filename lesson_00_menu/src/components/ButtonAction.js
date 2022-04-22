
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class ButtonAction extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__ButtonAction"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {ButtonAction} */
	static getComponent(gameObject) {
		return gameObject["__ButtonAction"];
	}

	/** @type {} */
	gameObject;
	/** @type {string} */
	actionName = "";

	/* START-USER-CODE */
	awake(){

		// expose params in to parent gameObject
		this.gameObject.actionName = this.actionName;
		this.gameObject.onPressed = function(){};
		this.gameObject.onReleased = function(){

			this.scene.events.emit("button-action-clicked", this, this.actionName);	
		};
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

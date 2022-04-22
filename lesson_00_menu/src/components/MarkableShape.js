
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class MarkableShape extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__MarkableShape"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {MarkableShape} */
	static getComponent(gameObject) {
		return gameObject["__MarkableShape"];
	}

	/** @type {} */
	gameObject;
	/** @type {boolean} */
	isMarked = false;
	/** @type {string} */
	markHexColor = "0xe570e5ff";

	/* START-USER-CODE */

	awake(){
		// expose parameters to parent
		this.gameObject.markHexColor = this.markHexColor;
		this.gameObject.defaultLineWidth = this.gameObject.lineWidth; // store default shape parameter
		this.gameObject.defaultLineColor = this.gameObject.strokeColor; // store default shape parameter

		// expose setMarked method to parent
		this.gameObject.setMarked = function(state){

			if (state){

				this.lineWidth = this.defaultLineWidth + 1;
				this.strokeColor = this.markHexColor;
				this.isMarked = true;

			} else {

				this.lineWidth = this.defaultLineWidth;
				this.strokeColor = this.defaultLineColor;
				this.isMarked = false;
			}
		};

		// apply instance settings
		this.initialized = false; // avoid to fire events on init process
		this.marked = this.isMarked;
		this.initialized = true;

		// register events
		this.gameObject.setInteractive()
		.on("pointerdown", () => {

			// console.dir(this.gameObject);
			this.marked = !this.marked;
		})
	}
	// private methods
	get marked(){

		return this.gameObject.isMarked;
	}
	set marked(state){
		// Ctrace("CmpShapeMarkable > isMarked > shape:{0} isMarked:{1}", this.gameObject.instanceName, state);
		if (state){

			this.gameObject.lineWidth = this.gameObject.defaultLineWidth + 1;
			this.gameObject.strokeColor = this.markHexColor;
			this.gameObject.isMarked = true;

		} else {

			this.gameObject.lineWidth = this.gameObject.defaultLineWidth;
			this.gameObject.strokeColor = this.gameObject.defaultLineColor;
			this.gameObject.isMarked = false;
		}
		if (this.initialized) this.scene.events.emit("shape-markable-clicked", this.gameObject);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
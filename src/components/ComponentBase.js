
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class ComponentBase extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__ComponentBase"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {ComponentBase} */
	static getComponent(gameObject) {
		return gameObject["__ComponentBase"];
	}

	/** @type {} */
	gameObject;
	/** @type {string} */
	instanceName = "";
	/** @type {boolean} */
	colorize = false;
	/** @type {string} */
	hexColor = "";
	/** @type {boolean} */
	isLocked = false;
	/** @type {"Image"|"Shape"|"Text"|"Container"|"Button"|"SwitchButton"} */
	componentType = "Image";

	/* START-USER-CODE */
	awake(){

		// expose params in to parent gameObject
		this.gameObject.hexColor = this.hexColor;
		this.gameObject.instanceName = this.instanceName;
		this.gameObject.isLocked = this.isLocked;
		this.gameObject.componentType = this.componentType;

		// Ctrace(this.constructor.name + " > awake > Component:{0} Type:{1} isLocked:{2}", this.instanceName, this.componentType, this.isLocked);

		switch(this.componentType){

			case "Button": 
				// var clickButton = new ClickButton(this.gameObject); // better to add new component for this
				if (this.colorize) this.colorizeButton(); 
			break;
			case "SwitchButton": 
				// var switchButton = new SwitchButton(this.gameObject); // better to add new component for this
				if (this.colorize) this.colorizeButton(); 
			break;
			case "Shape": 
				// var switchButton = new SwitchButton(this.gameObject); // better to add new component for this
				if (this.colorize) this.colorizeShape();
			break;
			case "Image": 
				// var switchButton = new SwitchButton(this.gameObject); // better to add new component for this
				if (this.colorize) this.colorizeImage();
			break;
		}
	}
	colorizeButton(){

		this.gameObject.skinUp.setTint(this.hexColor);
		this.gameObject.skinDown.setTint(this.hexColor);
	}
	colorizeShape(){

		this.gameObject.fillColor = this.hexColor; 
	}
	colorizeImage(){

		this.gameObject.tint = this.hexColor
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/**
 * SwitchButton Component
 * @example add this component to a Container 
 * @used by lesson_02/src/prefabs/FullScreenButton.js
 */
/* END-USER-IMPORTS */

class SwitchButton extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__SwitchButton"] = this;

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	/** @returns {SwitchButton} */
	static getComponent(gameObject) {
		return gameObject["__SwitchButton"];
	}

	/** @type {Phaser.GameObjects.Container} */
	gameObject;
	/** @type {"rectangle"|"circle"|"csutom"} */
	hitAreaType = "rectangle";
	/** @type {number} */
	hitAreaScaleX = 1;
	/** @type {number} */
	hitAreaScaleY = 1;
	/** @type {boolean} */
	offsetAtCenter = true;
	/** @type {boolean} */
	pressed = false;

	/* START-USER-CODE */
	awake(){

		var go = this.gameObject;
		// expose variables to parent
		go.offsetAtCenter = this.offsetAtCenter;
		go.hitAreaType = this.hitAreaType;

		InteractiveArea.setInteractiveContainer(go, {x:this.hitAreaScaleX, y:this.hitAreaScaleY}, "rectangle");
		var switchButton = this;
		go.isPressed = this.pressed;
		this.setSkin(this.pressed ? "pressed" : "released");

		go.on("pointerup", function(){

			if (go.isPressed){

				// Ctrace("SwitchButton > released...");		
				switchButton.setSkin("released");
				go.isPressed = false;
				go.onReleased();

			} else {

				// Ctrace("SwitchButton > pressed...");		
				switchButton.setSkin("pressed");
				go.isPressed = true;
				go.onPressed();
			}
		});
	}
	setSkin(state){

		var skinDown = this.gameObject.skinDown;
		var skinUp = this.gameObject.skinUp;
		if (state == "pressed"){

			skinDown.visible = !(skinUp.visible = false);

		} else {

			skinDown.visible = !(skinUp.visible = true);
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */
// You can write more code here

// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class ClickButton extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__ClickButton"] = this;

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	/** @returns {ClickButton} */
	static getComponent(gameObject) {
		return gameObject["__ClickButton"];
	}

	/** @type {} */
	gameObject;
	/** @type {"rectangle"|"circle"|"csutom"} */
	hitAreaType = "rectangle";
	/** @type {number} */
	hitAreaScaleX = 1;
	/** @type {number} */
	hitAreaScaleY = 1;
	/** @type {boolean} */
	offsetAtCenter = true;
	/** @type {string} */
	actionName = "";

	/* START-USER-CODE */
	awake(){

		var go = this.gameObject;
		// expose variables to parent
		go.offsetAtCenter = this.offsetAtCenter;
		go.hitAreaType = this.hitAreaType;

		// Ctrace(this.constructor.name + " > awake > clickButton:{0}, hitAreaType:{1} componentType:{2}", 
		// 	go.instanceName, this.hitAreaType, go.componentType
		// );
		// console.dir(go);
		switch (go.componentType){

			case "Container" : this.initContainer(go); break;
			case "Button" : this.initButton(go); break;
			case "Image" : this.initImage(go, this.actionName); break;
		}
	}
	initContainer(go){

		InteractiveArea.setInteractiveContainer(go, {x:this.hitAreaScaleX, y:this.hitAreaScaleY}, "rectangle");
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

			go.scene.events.emit("button-action-clicked", go, this.actionName);
		});	
	}
	initButton(go){

		// set bbutton interactive at area
		InteractiveArea.setInteractiveContainer(go, {x:this.hitAreaScaleX, y:this.hitAreaScaleY}, "rectangle");
		// register up - down events
		this.setSkin("released");
		var clickButton = this;
		go
		.on("pointerdown",  function(){ 

			clickButton.setSkin("pressed");
			go.onPressed();
		})
		.on("pointerup", function(){

			clickButton.setSkin("released");
			go.onReleased();
		});
	}
	initImage(go, action){

		// custom enlarge hit area
		InteractiveArea.setInteractive(go, {x:this.hitAreaScaleX, y:this.hitAreaScaleY}, this.hitAreaType);
		go.on("pointerdown",  function(){ 
			go.scene.add.tween({
				targets: go,
				scaleX: "*=0.8",
				scaleY: "*=0.8",
				duration: 80,
				yoyo: true
			});
		})
		.on("pointerup", function(){

			go.scene.events.emit("button-action-clicked", this, action);
		});
	}
	setSkin(state){
		var skinDown = this.gameObject.skinDown;
		var skinUp = this.gameObject.skinUp;
		// Ctrace("ClickButton > setSkin > skinDown;{0} skinUp:{1} state:{2}", skinDown, skinUp, state)
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

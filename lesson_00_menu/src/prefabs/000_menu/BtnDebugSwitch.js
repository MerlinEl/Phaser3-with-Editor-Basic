
// You can write more code here

/* START OF COMPILED CODE */

class BtnDebugSwitch extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 32, y ?? 32);

		// skinUp
		const skinUp = scene.add.image(0, 0, "debug", 1);
		this.add(skinUp);

		// skinDown
		const skinDown = scene.add.image(0, 0, "debug", 0);
		this.add(skinDown);

		// hitArea
		const hitArea = scene.add.rectangle(0, 0, 80, 80);
		this.add(hitArea);

		this.skinUp = skinUp;
		this.skinDown = skinDown;
		this.hitArea = hitArea;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	skinUp;
	/** @type {Phaser.GameObjects.Image} */
	skinDown;
	/** @type {Phaser.GameObjects.Rectangle} */
	hitArea;

	/* START-USER-CODE */
	awake(){
		var switchButton = SwitchButton.getComponent(this);
		switchButton.pressed = DebugSettings.showHitArea;
	}
	onPressed(){ // custom definition of event pressed	

		this.enableDebug(true);
	}
	onReleased(){ // custom definition of event released

		this.enableDebug(false);
	}
	/** @param {boolean} state */
	enableDebug(state){

		DebugSettings.showArea = state;
		DebugSettings.showHitArea = state;
		DebugSettings.showOrigin = state;
		this.scene.scene.start("Menu_001");
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

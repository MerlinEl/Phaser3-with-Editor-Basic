
// You can write more code here

/* START OF COMPILED CODE */

class BtnFullScreen extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 32, y ?? 32);

		// skinUp
		const skinUp = scene.add.image(0, 0, "fullscreen", 0);
		this.add(skinUp);

		// skinDown
		const skinDown = scene.add.image(0, 0, "fullscreen", 1);
		this.add(skinDown);

		// hitArea
		const hitArea = scene.add.rectangle(0, 0, 80, 80);
		this.add(hitArea);

		this.skinUp = skinUp;
		this.skinDown = skinDown;
		this.hitArea = hitArea;

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
	onPressed(){ // custom definition of event pressed	

		this.scene.game.scale.startFullscreen();
	}
	onReleased(){ // custom definition of event released

		this.scene.game.scale.stopFullscreen();
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

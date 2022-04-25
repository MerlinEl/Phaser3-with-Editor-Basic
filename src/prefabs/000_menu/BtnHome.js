
// You can write more code here

/* START OF COMPILED CODE */

class BtnHome extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 32, y ?? 32);

		// skinUp
		const skinUp = scene.add.image(0, 0, "home");
		this.add(skinUp);

		// skinDown
		const skinDown = scene.add.image(0, 0, "home");
		skinDown.scaleX = 0.8;
		skinDown.scaleY = 0.8;
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

	}
	onReleased(){ // custom definition of event released
		//http://cestaslunce.cz
		window.location.href = "http://vyvoj.interaktivky.cz/"; 
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

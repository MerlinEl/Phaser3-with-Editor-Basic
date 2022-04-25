
// You can write more code here

/* START OF COMPILED CODE */

class SimpleCage extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 100, y ?? 50);

		// bg_skin_01
		const bg_skin_01 = scene.add.rectangle(0, 0, 190, 90);
		bg_skin_01.isFilled = true;
		this.add(bg_skin_01);

		// fg_skin_01
		const fg_skin_01 = scene.add.ninePatch(-100, -50, 200, 100, "cage_01");
		fg_skin_01.setOrigin(0, 0);
		this.add(fg_skin_01);

		// hitArea
		const hitArea = scene.add.rectangle(0, 0, 200, 100);
		this.add(hitArea);

		this.bg_skin_01 = bg_skin_01;
		this.fg_skin_01 = fg_skin_01;
		this.hitArea = hitArea;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	bg_skin_01;
	/** @type {NinePatch} */
	fg_skin_01;
	/** @type {Phaser.GameObjects.Rectangle} */
	hitArea;
	/** @type {string} */
	fgColor = "0xf9f8cf";
	/** @type {string} */
	bgColor = "0xb7e089";

	/* START-USER-CODE */

	awake(){

		// update frame color
		this.fg_skin_01.tint = this.fgColor;
		// update background color
		this.bg_skin_01.tint = this.bgColor;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

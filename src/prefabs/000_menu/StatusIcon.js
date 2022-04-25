
// You can write more code here

/* START OF COMPILED CODE */

class StatusIcon extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 50, y ?? 50);

		// status_icon_01
		const status_icon_01 = scene.add.ellipse(-32, 0, 18, 18);
		status_icon_01.isFilled = true;
		status_icon_01.fillColor = 12632256;
		status_icon_01.isStroked = true;
		status_icon_01.strokeColor = 6828205;
		this.add(status_icon_01);

		// tf_01
		const tf_01 = scene.add.text(-16, 0, "", {});
		tf_01.setOrigin(0, 0.5);
		tf_01.text = "None";
		tf_01.setStyle({ "fontSize": "20px" });
		this.add(tf_01);

		this.status_icon_01 = status_icon_01;
		this.tf_01 = tf_01;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Ellipse} */
	status_icon_01;
	/** @type {Phaser.GameObjects.Text} */
	tf_01;
	/** @type {"Done"|"Error"|"In Progress"|"On Hold"|"None"} */
	progressStatus = "None";

	/* START-USER-CODE */
	colors = [];
	awake(){

		this.status_icon_01.fillColor =  ColorPalette.getColor("taskColors", this.progressStatus);
		this.tf_01.text = this.progressStatus;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

class Preloader extends Phaser.Scene {

	constructor() {
		super("Preloader");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// tf_01
		const tf_01 = this.add.text(514, 418, "", {});
		tf_01.setOrigin(0.5, 0.5);
		tf_01.text = "0%";
		tf_01.setStyle({ "color": "#39D9F5", "fontSize": "20px", "stroke": "#5E5EEF", "strokeThickness":1});

		// level_loader_01
		const level_loader_01 = this.add.sprite(512, 421, "loader_atlas", "level_loader0001");
		level_loader_01.scaleX = 0.75;
		level_loader_01.scaleY = 0.75;

		// level_loader_01 (components)
		const level_loader_01StartAnimation = new StartAnimation(level_loader_01);
		level_loader_01StartAnimation.animationKey = "anim_level_loader";

		this.tf_01 = tf_01;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	tf_01;

	/* START-USER-CODE */
	preload() {

		this.editorCreate();
		SceneManager.loadScene(this);
	}
	/**
	 * Externally update progress which is send from scene preload phase
	 */
	updateProgress(percentage){

		this.tf_01.text = Math.floor(percentage * 100) + "%";
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
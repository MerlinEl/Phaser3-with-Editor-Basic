
// You can write more code here

/* START OF COMPILED CODE */

class Guide_Kvitek_001 extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 100, y ?? 110);

		// giude_bg_01
		const giude_bg_01 = scene.add.image(0, 0, "giude_bg_01");
		this.add(giude_bg_01);

		// guide_frame
		const guide_frame = scene.add.image(0, 0, "guide_frame");
		this.add(guide_frame);

		// guide_01
		const guide_01 = scene.add.sprite(0, 0, "kvitek", "ano_0000");
		this.add(guide_01);

		// guide_01 (components)
		const guide_01StartAnimation = new StartAnimation(guide_01);
		guide_01StartAnimation.animationKey = "anim_idle";

		this.guide_01 = guide_01;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Sprite} */
	guide_01;

	/* START-USER-CODE */
	awake(){
		// pick animset component from guide_01 gameObject
		this.animSet = StartAnimation.getComponent(this.guide_01);
	}

	playAction(type){	

		Ctrace("Guide > playAction: anim_{0}", type);
		var snd_name;
		switch (type){

			case "good": 
				this.animSet.animationKey = "anim_" + type;
				snd_name = this.getRandomSoundName("snd_yes_", ["a", "b", "c"]);
				AudioManager.playAudio(snd_name);
			break; 
			case "bad": 
				this.animSet.animationKey = "anim_" + type;
				snd_name = this.getRandomSoundName("snd_no_", ["a", "b", "c"]);
				AudioManager.playAudio(snd_name);
			break;
			case "done": 
				this.animSet.animationKey = "anim_" + type;
				AudioManager.playAudio("snd_" + type);
			break;
			case "bonus": 
				this.animSet.animationKey = "anim_" + type;
				AudioManager.playAudio("snd_" + type);
			break;
			case "idle": 
				this.animSet.animationKey = "anim_" + type;
			break;
		}
		this.animSet.start(false);
	}

	getRandomSoundName(prefix, suffix_array){

		var suffix = suffix_array[Math.floor(Math.random()*suffix_array.length)];
		return prefix + suffix;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

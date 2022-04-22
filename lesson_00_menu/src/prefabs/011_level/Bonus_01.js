
// You can write more code here

/* START OF COMPILED CODE */

class Bonus_01 extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 175, y ?? 125);

		// wing_left_01
		const wing_left_01 = scene.add.image(-12, 11, "bonus_02");
		wing_left_01.setOrigin(1, 0.5);
		this.add(wing_left_01);

		// torso_01
		const torso_01 = scene.add.image(0, -19, "bonus_01");
		this.add(torso_01);

		// wing_right_01
		const wing_right_01 = scene.add.image(13, 11, "bonus_02");
		wing_right_01.scaleX = -1;
		wing_right_01.setOrigin(1, 0.5);
		this.add(wing_right_01);

		// wing_left_01 (components)
		const wing_left_01ComponentBase = new ComponentBase(wing_left_01);
		wing_left_01ComponentBase.instanceName = "left_wing_01";

		// wing_right_01 (components)
		const wing_right_01ComponentBase = new ComponentBase(wing_right_01);
		wing_right_01ComponentBase.instanceName = "right_wing_01";

		this.wing_left_01 = wing_left_01;
		this.torso_01 = torso_01;
		this.wing_right_01 = wing_right_01;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	wing_left_01;
	/** @type {Phaser.GameObjects.Image} */
	torso_01;
	/** @type {Phaser.GameObjects.Image} */
	wing_right_01;

	/* START-USER-CODE */
	bonusFlare;
	awake(){
		var options = {

			alpha:{start:0.6, end:0}
		}
		this.bonusFlare = new FocusFlare(this, options);
	}
	showFlare(){

		this.bonusFlare?.emitParticleAt(this);
	}
	play() {

        this.tween = this.scene.tweens.add({
            targets: [this.wing_left_01, this.wing_right_01],
            ease: 'Sine.easeInOut',
            duration: 200,
			scaleX:function(){

				return this.target.instanceName == "right_wing_01" ? -.3 : 0.3
			},
            yoyo: true,
            repeat: -1
        });
	}
	stop(){

		this.tween?.stop();
	}
	playEffect(duration){ // glow and fade

		if (this.tweenFade){
			
			this.tweenFade.restart();
			this.tweenGlow.restart();

		} else {

			var body  = GoManager.cloneImage(this.torso_01).setTintFill(0xffffff);;
			var wingL = GoManager.cloneImage(this.wing_left_01).setTintFill(0xffffff);;
			var wingR = GoManager.cloneImage(this.wing_right_01).setTintFill(0xffffff);;

			this.tweenGlow = this.scene.tweens.add({
				targets:[body, wingL, wingR],
				alpha:0,
				duaration: duration,
				yoyo:false,
				repeat:0
			})

			this.tweenFade = this.scene.tweens.add({
				targets: this,
				ease: 'Sine.easeInOut',
				duration: duration,
				alpha:0,
				yoyo: false,
				repeat: 0,
				onComplete:()=>{

					this.scene.events.emit("effect-complete");
				}
			});
		}
		return this.scene;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

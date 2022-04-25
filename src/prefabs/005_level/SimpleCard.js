
// You can write more code here

/* START OF COMPILED CODE */

class SimpleCard extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 100, y ?? 50);

		// bg_skin_01
		const bg_skin_01 = scene.add.ninePatch(-93.04065704345703, -41.798702239990234, 200, 92, "components_01", "card_01_body");
		bg_skin_01.scaleX = 0.9304065568553636;
		bg_skin_01.scaleY = 0.9304065568553636;
		bg_skin_01.setOrigin(0, 0);
		this.add(bg_skin_01);

		// tf_01
		const tf_01 = scene.add.text(0, 0, "", {});
		tf_01.setOrigin(0.5, 0.5);
		tf_01.text = "ABC";
		tf_01.setStyle({ "color": "#323059ff", "fontFamily": "Arial", "fontSize": "40px" });
		this.add(tf_01);

		// hitArea
		const hitArea = scene.add.rectangle(2, 0, 200, 100);
		this.add(hitArea);

		// mark_no
		const mark_no = scene.add.image(88, 39, "components_01", "mark_no");
		this.add(mark_no);

		// mark_yes
		const mark_yes = scene.add.image(87, 38, "components_01", "mark_yes");
		this.add(mark_yes);

		// mark_lock
		const mark_lock = scene.add.image(-91, 39, "components_01", "mark_lock");
		this.add(mark_lock);

		this.bg_skin_01 = bg_skin_01;
		this.tf_01 = tf_01;
		this.hitArea = hitArea;
		this.mark_no = mark_no;
		this.mark_yes = mark_yes;
		this.mark_lock = mark_lock;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {NinePatch} */
	bg_skin_01;
	/** @type {Phaser.GameObjects.Text} */
	tf_01;
	/** @type {Phaser.GameObjects.Rectangle} */
	hitArea;
	/** @type {Phaser.GameObjects.Image} */
	mark_no;
	/** @type {Phaser.GameObjects.Image} */
	mark_yes;
	/** @type {Phaser.GameObjects.Image} */
	mark_lock;
	/** @type {string} */
	cardText = "";
	/** @type {string} */
	textColor = "0x0095cb";
	/** @type {string} */
	bgColor = "0xb7e089";

	/* START-USER-CODE */

	awake(){

		// update text
		this.tf_01.text = this.cardText;
		// update text color
		var clr = ColorPalette.stringColorAsType(this.textColor, "#");
		this.tf_01.setStyle({ "color": clr});
		// update background color
		this.bg_skin_01.tint = this.bgColor;
		this.checkAs(["none"]);
	}
	/** {array} types ["good", "lock"] */
	checkAs(types){
		types.forEach(type=>{
			switch(type){
				case "none"		: [this.mark_no, this.mark_yes, this.mark_lock]
					.forEach(mark=> {mark.visible = false});
					break;
				case "good"		: this.mark_no.visible = !(this.mark_yes.visible = true); 
					break;
				case "bad"		: this.mark_no.visible = !(this.mark_yes.visible = false); 
					break;
				case "lock"		: this.mark_lock.visible = true; 
					break;
				case "unlock"	: this.mark_lock.visible = false; 
					break;
			}
		})
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

class Dot extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 12.5, y ?? 12.5);

		// icon_bg_01
		const icon_bg_01 = scene.add.image(0, 0, "components_01", "btn_round_01_bg");
		icon_bg_01.scaleX = 0.5;
		icon_bg_01.scaleY = 0.5;
		this.add(icon_bg_01);

		// icon_skin_01
		const icon_skin_01 = scene.add.image(0, 0, "circle_buttons_01", 11);
		icon_skin_01.scaleX = 0.5;
		icon_skin_01.scaleY = 0.5;
		this.add(icon_skin_01);

		// hitArea
		const hitArea = scene.add.rectangle(0, 0, 25, 25);
		this.add(hitArea);

		// handleB
		const handleB = scene.add.rectangle(50, 0, 10, 10);
		handleB.isFilled = true;
		handleB.fillColor = 514576;
		handleB.isStroked = true;
		handleB.strokeColor = 16719390;
		handleB.lineWidth = 2;
		this.add(handleB);

		// handleA
		const handleA = scene.add.rectangle(-50, 0, 10, 10);
		handleA.isFilled = true;
		handleA.fillColor = 514576;
		handleA.isStroked = true;
		handleA.strokeColor = 16719390;
		handleA.lineWidth = 2;
		this.add(handleA);

		// graphicContainer
		const graphicContainer = scene.add.container(0, 0);
		this.add(graphicContainer);

		this.hitArea = hitArea;
		this.handleB = handleB;
		this.handleA = handleA;
		this.graphicContainer = graphicContainer;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	hitArea;
	/** @type {Phaser.GameObjects.Rectangle} */
	handleB;
	/** @type {Phaser.GameObjects.Rectangle} */
	handleA;
	/** @type {Phaser.GameObjects.Container} */
	graphicContainer;

	/* START-USER-CODE */

	awake(){
// Ctrace("awake Dot")
// console.dir(this);
		var base = ComponentBase.getComponent(this); // get base to read instanceName
		this.index = parseInt(base.instanceName.split("_").pop());
		this.initHandles(base.instanceName);
	}
	initHandles(baseName){
		// Ctrace("Dot > initHandles > dot:{0} index:{1}", baseName, this.index);
		this.initHandle(this.handleA, baseName + "_handleA");
		this.initHandle(this.handleB, baseName + "_handleB");
	}
	initHandle(handle, instanceName){

		handle.instanceName = instanceName;
		handle.componentType = "handle";
		handle.areaType = "rectangle";
		handle.offsetAtCenter = true;
		handle.setInteractive(new Phaser.Geom.Rectangle(
			-handle.width/2, 
			-handle.height/2, 
			handle.width*2, 
			handle.height*2
		), Phaser.Geom.Rectangle.Contains);
		this.scene.input.setDraggable(handle); // enable drag
		// this.scene.input.enableDebug(handle, 0x80FFFF);
		handle.on('drag', function(pointer, dragX, dragY){

			handle.x = dragX;
			handle.y = dragY;
			SceneManager.activeSpline?.updateSpline(this);
		})
		handle.setPos = function(pos){

			handle.x = pos.x
			handle.y = pos.y
		}
		handle.pos = {
			get x(){return handle.x}, 
			get y(){return handle.y},
			set x(v){handle.x = v; Ctrace("set handle pos_x:{0}", v)}, 
			set y(v){handle.y = v; Ctrace("set handle pos_y:{0}", v)}
		};
		handle.graphics = this.scene.add.graphics();
		this.graphicContainer.add(handle.graphics);
		handle.drawLine = function(){

			this.graphics.clear();
			var path = new Phaser.Curves.Path(0,0);
			path.lineTo(handle.x, handle.y);
			this.graphics.lineStyle(1.5, 0x00ffff, 1);
			path.draw(this.graphics);
		}
	}
	onDrag(pointer, dragX, dragY){

		SceneManager.activeSpline?.updateSpline();
	}
	addHandle(type, handle){

		if (type == "A"){

			this.handleA = handle;

		} else {

			this.handleB = handle;
		}
		this.add(handle);
	}
	drawHandles(){

		this.handleA.drawLine(this);
		this.handleB.drawLine(this);
	}
	get pos(){return {x:this.x, y:this.y};}
	set pos(p){this.x = p.x; this.y = p.y; Ctrace("set dot pos:[{0}, {1}]", p.x, p.y)}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

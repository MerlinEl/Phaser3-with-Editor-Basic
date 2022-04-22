
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class DragAndDrop extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__DragAndDrop"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {DragAndDrop} */
	static getComponent(gameObject) {
		return gameObject["__DragAndDrop"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {"rectangle"|"circle"|"csutom"} */
	hitAreaType = "rectangle";
	/** @type {boolean} */
	offsetAtCenter = true;
	/** @type {boolean} */
	snapToZone = false;
	/** @type {boolean} */
	returnBackOnMiss = false;
	/** @type {number} */
	hitAreaScaleX = 1;
	/** @type {number} */
	hitAreaScaleY = 1;

	/* START-USER-CODE */
	awake(){

		var go = this.gameObject;
		// expose params to parent
		go.offsetAtCenter = this.offsetAtCenter;
		go.hitAreaType = this.hitAreaType;
		go.startPos = {x:go.x, y:go.y};
		go.isCorrect = true;
		// instance this for internal use
		var dnd = this;
		this.dropZone = null;
		// expose methods
		go.returnBack = function(smooth = true){
			dnd.returnBack(this, this.startPos, smooth);
		};

		InteractiveArea.setInteractiveContainer(go, {x:this.hitAreaScaleX, y:this.hitAreaScaleY}, "rectangle");
		// predefine gameObject abstract methods
		if (!go.onDragStart) go.onDragStart = function(){};	
		if (!go.onDrag) go.onDrag = function(){};	
		if (!go.onDragEnd) go.onDragEnd = function(){};	

		//var dragButton = this;
		go.scene.input.setDraggable(go); // enable drag
		go.on('dragstart', function(pointer, dragX, dragY){

			if (go.isLocked) return;
			dnd.dropZone = null;
			// Ctrace("dragstart depth:{0}", go.depth);
			// console.dir(go);
			go.scene.children.bringToTop(go);
			//dragButton.setSkin("pressed");
			go.onDragStart(pointer, dragX, dragY);
		})
		.on('drag', function(pointer, dragX, dragY){

			if (go.isLocked) return;	
			go.x = dragX;
			go.y = dragY;
			go.onDrag(pointer, dragX, dragY);
		})
		.on('drop', function (pointer, dropZone) {

			if (go.isLocked) return;	
			// Ctrace("drop on:{0}", dropZone.instanceName)
			dnd.dropZone = dropZone
			//dragButton.setSkin("released");
			go.onDragEnd(pointer, dropZone);
		})
		.on('dragend', function(pointer, dragX, dragY, dropped){

			if (go.isLocked) return;
			if (!dropped || !dnd.dropZone) {

				if (dnd.returnBackOnMiss) dnd.returnBack(go, go.startPos, true);

			} else if (dnd.snapToZone) {

				dnd.snapToCage(go, {x:dnd.dropZone.x, y:dnd.dropZone.y}, true);
			}
		})
	}
	moveTo(go, pos, smooth) {

		//var scene = this.scene;
		// Ctrace(this.instanceName + " >  moveTo > scene:{0}", this.scene);
		if (smooth){

			go.scene.add.tween({targets:go, x:pos.x, y:pos.y, duration:80, onComplete: function () {

				go.scene.events.emit("gameobject-was-moved", go);	
			}});

		} else {

			go.setPosition(pos.x, pos.y);
			go.scene.events.emit("gameobject-was-moved", go);	
		}
	}

	returnBack(go, pos, smooth) {

		this.moveTo(go, pos, smooth);
	}

	snapToCage(go, pos, smooth){

		this.moveTo(go, pos, smooth);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

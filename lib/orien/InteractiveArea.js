/**
 * @author       MerlinEl <merlin_el@hotmail.com>
 * @copyright    2022
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

class InteractiveArea {

	/*
	 * Create Interactive Area for GameObject
     * @param {Phaser.GameObjects.GameObject}  go
	 * 
	*/
	static setInteractive(go, areaScale, areaType){

		// get absolute size (after scale)
		// calculate percentual scale as pixel size
		var inflate_x = Math.abs(go.width - (go.width * areaScale.x)) / 2;
		var inflate_y = Math.abs(go.height - (go.height * areaScale.y)) / 2;
		// var rect = go.getBounds();
		var rect = new Phaser.Geom.Rectangle(

			0,
			0,
			Math.abs(go.displayWidth / go.scaleX) , // abs > prevent negative size
			Math.abs(go.displayHeight / go.scaleY) 
		);
		// rect.width /= go.scaleX; 
		// rect.height /= go.scaleY; 
		// rect.x = rect.y = 0;
		rect = Phaser.Geom.Rectangle.Inflate(rect, inflate_x, inflate_y);
		// rect.x *= go.scaleX;
		// rect.y *= go.scaleY;
		
		// var display_size = this.getDisplaySize(go);
		// Ctrace(
		// 	"InteractiveArea > setInteractive > Item:{0}\n\tsize relative:[{1}, {2}] absolute:[{3}, {4}] scale:[{5}, {6}]\n\thitRect:@[{7}, {8}] scale:[{9},{10}]",
		// 	go.instanceName, go.width, go.height,
		// 	display_size.width, display_size.height, go.scaleX, go.scaleY,
		// 	rect.width, rect.height, areaScale.x, areaScale.y,
		// )
		
		// initialize go.input.hitArea
		go.setInteractive(rect, Phaser.Geom.Rectangle.Contains); //, { useHandCursor: true }

		if (DebugSettings.showArea){ // Blue

			var rectangle_in = go.scene.add.rectangle(0, 0, go.displayWidth, go.displayHeight);
			rectangle_in.setStrokeStyle(1, 0x0033FF);
			var bounds = go.getBounds();
			rectangle_in.setPosition(bounds.left + bounds.width / 2, bounds.top + bounds.height / 2);
		}
		if (DebugSettings.showHitArea) { // Green

			//go.scene.input.enableDebug(go, 0x80FFFF);
			var rectangle_out = go.scene.add.rectangle(0, 0, rect.width * go.scaleX, rect.height * go.scaleY);
			rectangle_out.setStrokeStyle(1, 0x80FFFF);
			var bounds_out = go.getBounds();
			rectangle_out.setPosition(bounds_out.x + bounds_out.width / 2, bounds_out.y + bounds_out.height / 2);
		}
		if (DebugSettings.showOrigin){ // Red

			var circle = go.scene.add.circle(0, 0, 5, 0xff0000);
			circle.setPosition(go.x, go.y);
		}

		// Ctrace("InteractiveArea > setInteractive > go:{0}", go.instanceName);
		// Ctrace("\thitRect >\n\theight:{0}\n\ttype:{1}\n\twidth:{2}\n\tx:{3}\n\ty:{4}", 
		// 	rect.height, rect.type, rect.width, rect.x, rect.y
		// );
		// console.dir(go.input.hitArea);
	}
	/**
	 * Make an container interactive - dragabble
	 * Phaser 3 the container have 0 width and height
	 * @example
		InteractiveArea.setInteractiveContainer(go, {x:this.hitAreaScaleX, y:this.hitAreaScaleY}, "rectangle");
	 */
	static setInteractiveContainer(container, areaScale, areaType, isDropZone = false){

		var area = container.hitArea;
		var centred = container.offsetAtCenter;
		var rect = null;
		// create area if is missing (expensive with to many children in container)
		if (!area) {

// TODO implement centred
			var size = this.getContainerSize(container);
			rect = new Phaser.Geom.Rectangle(
				 // calculate parent scale
				-size.width / 2 * container.scaleX,
				-size.height / 2 * container.scaleY,
				size.width,
				size.height
			);

		} else {

			rect = new Phaser.Geom.Rectangle(

				-container.hitArea.width / 2 * areaScale.x,
				-container.hitArea.height / 2 * areaScale.y,
				Math.abs(container.hitArea.width * areaScale.x), // abs > prevent negative size
				Math.abs(container.hitArea.height * areaScale.y)
			);
		}

		container.setInteractive(rect, Phaser.Geom.Rectangle.Contains, isDropZone);

		if (DebugSettings.showHitArea) { // Green
			
			var rectangle_out = container.scene.add.rectangle(0, 0, rect.width * container.scaleX, rect.height * container.scaleY);
			rectangle_out.setStrokeStyle(1, 0x80FFFF);
			//rectangle_out.setPosition(container.x + areaScale.x, container.y + areaScale.y);
			container.add(rectangle_out);
		}
		
		if (DebugSettings.showOrigin){ // Red

			var circle = container.scene.add.circle(0, 0, 5, 0xff0000);
			container.add(circle);
		}
	}
	/**
	 * The displayed width of this Game Object.
	 * This value takes into account the scale factor.
	 * @param {Phaser.GameObjects.GameObject} go
	 * @return {Phaser.Structs.Size}
	 */
	static getDisplaySize(go){

		// return {
		// 	width:go.width * go.scaleX,
		// 	height:go.height * go.scaleY
		// };
		return new Phaser.Structs.Size(

			go.displayWidth,
			go.displayHeight
		)
	}
	// Get Bounds of a container - recursive call for nested containers
	static getContainerSize(container) {	

		var min = {x:0, y:0};
		var max = {x:0, y:0};
		this.getBoundsRecursive(container, min, max);
		return  {
			 width:Math.abs(max.x - min.x), height:Math.abs(max.y - min.y)
		};
	}
	static getBoundsRecursive(container, min, max){

		container.iterate(function(child) {
		
			if (child.list){ // container deeper 
				
				InteractiveArea.getBoundsRecursive(child, min, max);

			} else {

				InteractiveArea.getExpandBounds(child, min, max);
			}
			
		});//.bind(this));
	}
	static getExpandBounds(child, min, max){

		if (child.x < min.x) min.x = child.x;
		if (child.y < min.y) min.y = child.y;
		if (child.displayWidth > max.x) max.x = min.x + child.displayWidth;
		if (child.displayHeight > max.y) max.y = min.y + child.displayHeight;
	}
}


	/**
	 * Make an object interactive - dragabble
	 * Phaser 3 the container have 0 width and height
	 * @example
		InteractiveArea.setInteractiveContainer(container);
	 */
	// static setInteractiveContainer(container, isDropZone = false){
		
	// 	Ctrace(this.name + " > setInteractiveContainer > container:{0} hitArea:{1}", container.instanceName, container.hitArea);
	// 	Ctrace(this.name + " >\tsize:[{0},{1}]", container.displayWidth, container.displayHeight);

	// 	// console.dir(container);
	// 	var rect = this.getArea(container);
	// 	if (!rect){

    //         Ctrace("InteractiveArea > createHitArea > Missing hitArea on container:{0} name:{1}", container, container.instanceName || "undefined");
	// 		console.dir(container);
    //         return false;
    //     }
	// 	container.setInteractive(rect, Phaser.Geom.Rectangle.Contains, isDropZone);
	// 	// Show hit area with color
    // 	if (DebugSettings.showHitArea) {
			
	// 		container.scene.input.enableDebug(container, 0x80FFFF);
	// 	}
	// 	if (DebugSettings.showOrigin){ // Red

	// 		var circle = container.scene.add.circle(0, 0, 5, 0xff0000);
	// 		container.add(circle);
	// 	}
	// 	return true;
	// }
	// static getArea(container){
        
	// 	var area = container.hitArea;
	// 	var centred = container.offsetAtCenter;
	// 	var rect = null;
	// 	if (!area) { // try to create area
			
	// 		var size = this.getContainerSize(container);
	// 		return new Phaser.Geom.Rectangle(
	// 			 // calculate parent scale
	// 			-size.width / 2 * container.scaleX,
	// 			-size.height / 2 * container.scaleY,
	// 			size.width,
	// 			size.height
	// 		);
	// 	}
	// 	// Ctrace("InteractiveArea > getArea > container:{0} hitAreaType:{1} scale:[{2}, {3}] centred:{4}", 
	// 	// 	container.instanceName, container.hitAreaType, container.scaleX, container.scaleY, centred
	// 	// );
	// 	switch(container.hitAreaType){

	// 		case "rectangle": // used in >  lesson_02/src/prefabs/SimpleButton.js
	// 		rect = new Phaser.Geom.Rectangle(
	// 			 // calculate parent scale
	// 			centred ? -area.width / 2 * container.scaleX: 0,
	// 			centred ? -area.height / 2 * container.scaleY : 0,
	// 			area.width,
	// 			area.height
	// 		); 
	// 		break;
	// 		case "offset_rectangle": // used in > lesson_02/src/prefabs/Dot.js
	// 		rect = new Phaser.Geom.Rectangle(
	// 			centred ? area.x - area.width / 2 : area.x, 
	// 			centred ? area.x - area.width / 2 : area.y,
	// 			area.width,
	// 			area.height
	// 		); 
	// 		break;  // not used
	// 		case "custom_rectangle": rect = area; break;
	// 	}
	// 	return rect;
	// }

/**
	 * Calculate area of all children (I decided that this way will be slow and better is add one hit hitArea)
	 */
	// createHitAreaComplex(container, type, showArea){

	// 	//Ctrace("InteractiveArea > createHitArea2 > scene:{0} container:{1} type:{2} show:{3}", container.scene, container, type, showArea);
    //     var size = this.getContainerSize(container);
	// 	container.setInteractive(new Phaser.Geom.Rectangle(
	// 		0,0,
	// 		size.width,
	// 		size.height
	// 	), Phaser.Geom.Rectangle.Contains);
	// 	//if (showArea) 
	// 	scene.input.enableDebug(container, 0x80FFFF);
	// },
	// drawHitAreaBounds(scene, container, rect){

    //     scene.input.enableDebug(container, 0x80FFFF); // trouble when container is scaled
	// 	// var rect = scene.add.rectangle(rect.x, rect.y, rect.width, rect.height);
    // 	// rect.setStrokeStyle(1, 0x00FFFF);
	// 	// console.dir(container)
	// 	// var offset = this.getSceneOffset(container)
	// 	// rect.setPosition(offset.x, offset.y);
    // },
	/*getSceneOffset(container){

		var offset = {x:container.x, y:container.y};
		var parent = container.parentContainer;
		while (parent){

			offset.x += parent.x;
			offset.y += parent.y;	
			parent = parent.parentContainer;	
		}
		return offset;
	},*/


/*
this.gameObject.setInteractive()

var go = this.gameObject;
var zvetseni_x = 10;
var zvetseni_y = 50;
// console.dir(go);
Ctrace("getScenePosition > scenePos:@{0}", go.instanceName);
// Inflate
var rect = go.getBounds();
rect.width /= go.scaleX; 
rect.height /= go.scaleY; 
rect.x = rect.y = 0;
Phaser.Geom.Rectangle.Inflate(rect, zvetseni_x, zvetseni_y);
rect.x *= go.scaleX;
rect.y *= go.scaleY;
go.scene.input.setHitAreaRectangle(
	go, 
	rect.x,
	rect.y, 
	rect.width, 
	rect.height
);

go.scene.input.setHitAreaRectangle(
	go, 
	rect.x,
	rect.y, 
	rect.width, 
	rect.height
);


var go = this.gameObject;
var hitSize = {
	width:go.width * this.hitAreaScaleX, 
	height:go.height * this.hitAreaScaleY
};
go.setInteractive(new Phaser.Geom.Rectangle(
	(go.width - hitSize.width) / 2 , (go.height - hitSize.height) / 2,
	hitSize.width,
	hitSize.height
), Phaser.Geom.Rectangle.Contains)
*/
/**
 * @author       MerlinEl <merlin_el@hotmail.com>
 * @copyright    2022
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

class GoManager {

	static cloneImage(image){

		var imageClone = image.scene.add.image(image.x, image.y, image.texture.key);
		imageClone.setOrigin(image.originX, image.originY);
		imageClone.scaleX = image.scaleX;
		imageClone.scaleY = image.scaleY;	
		image.parentContainer.add(imageClone);
		return imageClone;
	}
}
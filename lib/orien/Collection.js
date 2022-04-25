/**
 * @author       MerlinEl <merlin_el@hotmail.com>
 * @copyright    2022
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

class Collection {
    
    /**
     * Move gameObject at top level on scene
     * It removes game objects from display list, 
     * then add it to last one (render order)
     * this.children.remove(child); this.add(child)
     */
    static bringToTop(go){
        go.scene.children.bringToTop(go);
    }
    /**
     * Move object(item) at top level on scene
     * DEPRECADED : USE Collection.bringToTop(go);
     */
    // static bringToSceneTop (item){
    //     // loop through all objects in scene
    //     var maxDepth = 0;
    //     item.scene.children.list.forEach(child => { 
    //         if (child != item) maxDepth = Math.max(maxDepth, child.depth); // skip self
    //     });
    //     // Ctrace("set item:{0} depth:{1}", item.instanceName, maxDepth + 1); 
    //     item.depth = maxDepth + 1;
    // }
    /**
     * Shuffle GameObjects in layer
     * @param {Phaser.GameObjects.Layer} layer
     * @param {string} way "X" - "Y" - "XY"
     */
    static shuffleGameObjectsInLayer(layer, way = "XY"){

        var positions = [];
        layer.list.forEach(go=>{

            positions.push(new Phaser.Geom.Point(go.x, go.y));
        })
        Phaser.Actions.Shuffle(positions);
        layer.list.forEach((go, index)=> {

            var pos = positions[index];
            // Ctrace("go:{0} move from:[{1}, {2}] to:[{3}, {4}]", go.instanceName, go.x, go.y, pos.x, pos.y);
            go.setPosition(pos.x, pos.y);
        })
    }
    static shuffleGameObjectsInLayerBySet(layer, setIndex){

        //TODO
    }
}


// DROPED
/**
 * Move objects in list(items) at top level
 */
// bringToSceneTopMulti (scene, items){
//     // loop through all objects in scene
//     var maxDepth = 0;
//     scene.children.list.forEach(child => { 
//         // Ctrace("Collection > bringToTopMulti > child:{0} type:{1} depth:{2}", child.instanceName, child.type, child.depth);
//         maxDepth = Math.max(maxDepth, child.depth); 
//     });
//     items.forEach((item, index) =>{
//         // Ctrace("set to depth:{0}", maxDepth + 1); 
//         item.depth = maxDepth+ 1;
//     })
// }
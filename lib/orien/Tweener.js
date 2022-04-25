/**
 * @author       MerlinEl <merlin_el@hotmail.com>
 * @copyright    2022
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/** Static Class Tweener */
class Tweener {

    /**
     * @param {Phaser.GameObjects.GameObject} go
     * @param {number} duration in ms
     * @example
        Tweener.fadeOut(go, 2000).events.once("fadeout-complete", function(){
            go.scene.events.emit("spline-animation-complete");
        });
     */
    static fadeOut(go, duration){

        var alphaTween = go.scene.tweens.add({
            targets: go,
            alpha:0,
            duration: duration,
            ease: 'Linear',
            onComplete: function(){
                
                alphaTween.remove();
                go.visible = false;
                go.scene.events.emit("fadeout-complete");
            }
        })
        return go.scene;
    }
}

        /*
        static tintBlend(go, startColor, endColor, duration) {
        
            var colorBlend = {step: 0};
            go.scene.add.tween(colorBlend).to({step: 100}, duration, Phaser.Easing.Default, false)
                .onUpdateCallback(() => {
                    go.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step, 1);
                })
                .start()
            return go.scene;
        };
        
        
        go.scene.tweens.addCounter({
            from: 255,
            to: 0,
            duration: 5000,
            onUpdate: function (tween)
            {
                const value = Math.floor(tween.getValue());

                image.setTint(Phaser.Display.Color.GetColor(value, value, value));
            }
        });*/
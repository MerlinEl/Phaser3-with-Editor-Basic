/**
 * @author       MerlinEl <merlin_el@hotmail.com>
 * @copyright    2022
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
                // Ctrace("Fireworks > onUpdate > val:{0}", value);
class Fireworks {

    particles;
    emitter;
    deathZone;
    scene;
    frames = ["blue", "green", "red", "white", "yellow"];
    duration;
    /**
     * @param {Phaser.Scene} scene
     * @param {Phaser.Geom.Rectangle} rect safe bounds
     * @param {number} duration ms
     */
    constructor(scene, rect, duration){

        this.scene = scene;
        this.duration = duration;
        this.deathZone = new Phaser.Geom.Rectangle(
            rect.x, 
            rect.y, 
            rect.width, 
            rect.height
        );
        
        // visualise safe bounds
        var r1 = scene.add.rectangle(
            this.deathZone.x + this.deathZone.width / 2, 
            this.deathZone.y + this.deathZone.height / 2, 
            this.deathZone.width, 
            this.deathZone.height
        );
        r1.setStrokeStyle(1, 0x91ff39);

        this.particles = scene.add.particles('flares');
    }
    stop(){

        clearInterval(this.fireworksInterval);
    }
    play(){
        
        var deathZone = this.deathZone;
        var particles = this.particles;
        var frames = this.frames;

        this.fireworksInterval = setInterval(function(){

            var randomColor = frames[Phaser.Math.Between(0, 4)];
            var randomOffsetX = Phaser.Math.Between(deathZone.x, deathZone.x + deathZone.width);
            new FireworkTail(particles, deathZone, randomOffsetX, frames, randomColor);

        }, 500);
    }
}

class FireworkCrown{

    constructor(particles, frames, colorName){

        this.emiter1 = particles.createEmitter({
            frame: colorName,
            lifespan: 800,
            speed: { min: 50, max: 300 },
            scale: { start: 0.2, end: 0 },
            blendMode: 'ADD',
            on: false,
        });

        this.emiter2 = particles.createEmitter({
			frame: colorName,
			angle: { start: 0, end: 360, steps: 16 },
			lifespan: 700,
			speed: 250,
			quantity: 16,
			scale: { start: 0.01, end: .5 },
			alpha: { start: 1, end: 0 },
			blendMode: 'ADD',
			on: false,
            emitCallback:()=>{

                //console.log("done")
            }
		});

		this.emiter3 = particles.createEmitter({
			frame: frames,
			angle: { start: 0, end: 360, steps: 8 },
			lifespan: 700,
			speed: 250,
			quantity: 8,
			scale: { start: 0.03, end: 1 },
            alpha: { start: 1, end: 0 },
			blendMode: 'ADD',
			on: false
		});

    }
    fire(pos){
        this.emiter1.setPosition(pos.x, pos.y);
        this.emiter1.explode(50);
        this.emiter2.emitParticleAt(pos.x, pos.y);
        this.emiter3.emitParticleAt(pos.x, pos.y);
    }
}
class FireworkTail{
    
    emiter;
    constructor(particles, deathZone, offsetX, frames, colorName){
        
        var randomTop = { 
            start: deathZone.y + deathZone.height, 
            end: Phaser.Math.Between(deathZone.y, deathZone.y+200), 
            steps: 120 
        };
        this.emitter = particles.createEmitter({
            frame: colorName,
            radial: false,
            x: offsetX,
            y: randomTop,
            lifespan: 1200,
            speedX: { min: -40, max: 40 }, // tail thickness
            speedY: { min: 200, max: 500 },
            quantity: 2,
            gravity: 200,
            scale: { start: 0.2, end: 0, ease: 'Linear' },
            alpha: { start: 1, end: 0},
            blendMode: 'ADD',
            deathZone: { type: 'onLeave', source: deathZone },
            emitCallback:()=>{

                //console.log("top:" + this.emitter.y.counter + "end:" + this.emitter.y.end)
                if (this.emitter.y.counter <= this.emitter.y.end+10) {
                    
                    this.emitter.stop();
                    var fireworkCrown = new FireworkCrown(particles, frames, colorName)
                    fireworkCrown.fire({x:this.emitter.x.propertyValue, y:this.emitter.y.end});
                     //this.emitter.killAll();
                }
            }
        });
    }
}
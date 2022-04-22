/**
 * @author       MerlinEl <merlin_el@hotmail.com>
 * @copyright    2022
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

class FocusFlare {

    alpha = {start:1, end:0};
	streaksCount = 32;
	flareColor = {
		Blue: 'blue',
		Green: 'green',
		Red: 'red',
		White: 'white',
		Yellow: 'yellow',
		All: ["blue", "green", "red", "white", "yellow"]
	};
    /**@param {Phaser.GameObjects.GameObject} */
    constructor(go, options){

        this.createEmitersAt(go);
        if (!options) return;
        this.alpha.start = options.alpha?.start || 1;
        this.alpha.end = options.alpha?.end || 0;
    }
    createEmitersAt(go){

        var scene = go.scene;
        var pos = {x:go.x, y:go.y};    

        // create particles
        this.particle_01 = scene.add.particles('streak_01');
        this.particle_02 = scene.add.particles('flares');

        if (!this.particle_01 || !this.particle_02) {

            Ctrace("FocusFlare > createEmitersAt > flares_01.json or streaks_01.json are not loaded!");
            return;
        }
		this.buildStyle1(pos);
    }
    emitParticleAt(pos){

        if (!this.initialized) return;

        this.particle_01.emitParticleAt(pos.x, pos.y);
        this.particle_02.emitParticleAt(pos.x, pos.y);
    }
	buildStyle1(pos){

		// main streaks
		this.particle_01.createEmitter({
			x: pos.x, y: pos.y,
			angle: { start: 0, end: 360, steps: this.streaksCount },
			lifespan: 800,
			speed: 400,
			quantity: this.streaksCount,
			scale: { start: 0.1, end: 1 },
			alpha: { start: 0.5, end: 0},
			rotate: (p) => Phaser.Math.RadToDeg(Math.atan2(p.velocityY, p.velocityX))-90,
			blendMode: 'SCREEN',
			on: false
		});

		// main streaks glow
		this.particle_02.createEmitter({
			frame: this.flareColor.All,
			x: pos.x, y: pos.y,
			angle: { start: 0, end: 360, steps: this.streaksCount },
			lifespan: 700,
			speed: 400,
			quantity: this.streaksCount,
			scaleX: 2,
			alpha: { start: 0.5, end: 0},
			rotate: (p) => Phaser.Math.RadToDeg(Math.atan2(p.velocityY, p.velocityX)),
			blendMode: 'ADD',
			on: false
		});

		// stars ring |
		this.particle_02.createEmitter({
			frame: this.flareColor.All,
			angle: { start: 0, end: 360, steps: 16 },
			scaleX: .8,
			scaleY: .3,
			lifespan: 1000,
			speed: 200,
			quantity: 16,
			alpha: { start: 1, end: 0 },
			rotate: {start: -360, end: 360},
			blendMode: 'ADD',
			on: false
		});
		// stars ring --
		this.particle_02.createEmitter({
			frame: this.flareColor.All,
			angle: { start: 0, end: 360, steps: 16 },
			scaleX: .3,
			scaleY: .8,
			lifespan: 1000,
			speed: 200,
			quantity: 16,
			alpha: { start: 1, end: 0 },
			rotate: {start: -360, end: 360},
			blendMode: 'ADD',
			on: false
		});

		// wave
		this.particle_02.createEmitter({
			frame: this.flareColor.Yellow,
			angle: { start: 0, end: 360, steps: 16 },
			scaleX: 5,
			scaleY: 2,
			lifespan: 800,
			speed: 400,
			quantity: 16,
			alpha: { start: .1, end: 0 },
			rotate: 360,
			blendMode: 'ADD',
			on: false
		});

		// lens long
		this.particle_02.createEmitter({
			frame: this.flareColor.White,
			angle: { start: 0, end: 360, steps: this.streaksCount },
			scaleX: 3,
			scaleY: .08,
			lifespan: 300,
			speed: 500,
			quantity: this.streaksCount,
			alpha: { start: 1, end: 0 },
			rotate: (p) => Phaser.Math.RadToDeg(Math.atan2(p.velocityY, p.velocityX)),
			blendMode: 'ADD',
			on: false
		});

		// lens small
		this.particle_02.createEmitter({
			frame: this.flareColor.White,
			angle: { start: 0, end: 360, steps: this.streaksCount/2 },
			scaleX: 2,
			scaleY: .5,
			lifespan: 300,
			speed: 500,
			quantity: this.streaksCount/2,
			alpha: { start: 1, end: 0 },
			rotate: (p) => Phaser.Math.RadToDeg(Math.atan2(p.velocityY, p.velocityX)),
			blendMode: 'ADD',
			on: false
		});

		this.initialized = true;
	}
	buildStyle2(pos){

		// main streaks
		this.particle_01.createEmitter({
			x: pos.x, y: pos.y,
			angle: { start: 0, end: 360, steps: this.streaksCount },
			lifespan: 800,
			speed: 400,
			quantity: this.streaksCount,
			scale: { start: 0.1, end: 1 },
			alpha: { start: 0.5, end: 0},
			rotate: (p) => Phaser.Math.RadToDeg(Math.atan2(p.velocityY, p.velocityX))-90,
			blendMode: 'SCREEN',
			on: false
		});

		// main streaks glow
		this.particle_02.createEmitter({
			frame: this.flareColor.All,
			x: pos.x, y: pos.y,
			angle: { start: 0, end: 360, steps: this.streaksCount },
			lifespan: 700,
			speed: 400,
			quantity: this.streaksCount,
			scaleX: 2,
			alpha: { start: 0.5, end: 0},
			rotate: (p) => Phaser.Math.RadToDeg(Math.atan2(p.velocityY, p.velocityX)),
			blendMode: 'ADD',
			on: false
		});

		// wave
		this.particle_02.createEmitter({
			frame: this.flareColor.Yellow,
			angle: { start: 0, end: 360, steps: 16 },
			scaleX: 4,
			scaleY: .5,
			lifespan: 800,
			speed: 500,
			quantity: 16,
			alpha: { start: 1, end: 0 },
			rotate: 360,
			blendMode: 'ADD',
			on: false
		});

		// lens long
		this.particle_02.createEmitter({
			frame: this.flareColor.White,
			angle: { start: 0, end: 360, steps: this.streaksCount },
			scaleX: 3,
			scaleY: .08,
			lifespan: 300,
			speed: 500,
			quantity: this.streaksCount,
			alpha: { start: 1, end: 0 },
			rotate: (p) => Phaser.Math.RadToDeg(Math.atan2(p.velocityY, p.velocityX)),
			blendMode: 'ADD',
			on: false
		});

		// lens small
		this.particle_02.createEmitter({
			frame: this.flareColor.White,
			angle: { start: 0, end: 360, steps: this.streaksCount/2 },
			scaleX: 2,
			scaleY: .5,
			lifespan: 300,
			speed: 500,
			quantity: this.streaksCount/2,
			alpha: { start: 1, end: 0 },
			rotate: (p) => Phaser.Math.RadToDeg(Math.atan2(p.velocityY, p.velocityX)),
			blendMode: 'ADD',
			on: false
		});

		this.initialized = true;
	}
}
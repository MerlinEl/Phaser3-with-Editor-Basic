// TODO maybe remake like Rex classess
// https://github.com/rexrainbow/phaser3-rex-notes/blob/9912efd1ca0558be00c82cf3e52d8ae6a734e619/plugins/shaders/outline/OutlinePostFxPipeline.js#L35

/** 
 * Smooth pipeline 
 * @source  https://github.com/PonasKovas/gj2021/blob/d1c8166241623c37428278e93c10605ee382ae35/scripts/outline.shader
 * @preload
 * this.load.script("SmoothPipeline", 'assets/filters/SmoothPipeline.js');
 * or
 * AssetLoader.loadPipeline(this, "SmoothPipeline");
 * @create
 * this.smoothOutlinePipeline = this.game.renderer.pipelines.add('Smooth', new SmoothPipeline(this.game));
 * go.setPipeline('Smooth');
 * @update
 * this.smoothOutlinePipeline.time += 0.01;
 * */ 
var SmoothOutlinePipeline = new Phaser.Class({
    Extends: Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline,
    initialize:
        function SmoothOutlinePipeline(game) {
            Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline.call(this, {
                game: game,
                renderer: game.renderer,
                fragShader: `
            precision mediump float;
            uniform sampler2D uMainSampler;
            uniform vec2 texSize;
            varying vec2 outTexCoord;

            uniform bool Smooth;
            uniform vec3 outlineColor;

            const float width = 40.0; // range(0.0, 16)
            float outlineAlpha = 1.0;
            int pixel_size = 4; // range(1, 10)
            void main() {

                vec2 unit = (1.0/float(pixel_size) ) / texSize;
                vec4 pixel_color = texture2D(uMainSampler, outTexCoord);
                if (pixel_color.a == 0.0) { // process transparent pixels

                    pixel_color = vec4(outlineColor, 0.0);
                    for (float x = -ceil(width); x <= ceil(width); x++) {
                        for (float y = -ceil(width); y <= ceil(width); y++) {
                            if (texture2D(uMainSampler, outTexCoord + vec2(x*unit.x, y*unit.y)).a <= 0.0 || (x==0.0 && y==0.0)) {
                                continue;
                            }
                            if (Smooth) {
                                pixel_color.a += outlineAlpha / (pow(x,2.0)+pow(y,2.0)) * (1.0-pow(2.0, -width));
                                if (pixel_color.a > 1.0) {
                                    pixel_color.a = 1.0;
                                }
                            } else {
                                pixel_color.a = outlineAlpha;
                            }
                        }
                    }
                }
                gl_FragColor = pixel_color;
            }`
            });
        },
    outlineColor: new Phaser.Display.Color(),
    smooth: false,
    onPreRender() {
        this.set1f('Smooth', this.smooth);
        this.set3f('outlineColor', this.outlineColor.redGL, this.outlineColor.greenGL, this.outlineColor.blueGL);
        this.set2f('texSize', this.renderer.width, this.renderer.height);
    },
    setSmooth(state) {
        this.smooth = state;
        return this;
    },
    setOutlineColor(value) {
        if (typeof (value) === 'number') {
            value = Phaser.Display.Color.IntegerToRGB(value);
        }
        this.outlineColor.setFromRGB(value);
        return this;
    }
});
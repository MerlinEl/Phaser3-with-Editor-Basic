/** 
 * Grayscale pipeline 
 * @source https://www.shadertoy.com/view/lsf3WH
 * @preload
 * this.load.script("GrayscalePipeline", 'assets/filters/GrayscalePipeline.js');
 * or
 * AssetLoader.loadPipeline(this, "GrayscalePipeline");
 * @create
 * this.grayscalePipeline = this.game.renderer.pipelines.add('Grayscale', new GrayscalePipeline(this.game));
 * go.setPipeline('Grayscale');
 * @update
 * this.grayscalePipeline.time += 0.01;
 * */ 
var GrayscalePipeline = new Phaser.Class({
    Extends: Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline,
    initialize:
        function GrayscalePipeline(game) {
            Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline.call(this, {
                game: game,
                renderer: game.renderer,
                fragShader: `
            precision mediump float;
            uniform sampler2D uMainSampler;
            varying vec2 outTexCoord;
            void main(void) {
                vec4 color = texture2D(uMainSampler, outTexCoord);
                float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
                if (color.a < 0.5) discard; // discard transparent pixels
                    gl_FragColor = vec4(vec3(gray), 1.0);
            }`
            });
        }
});
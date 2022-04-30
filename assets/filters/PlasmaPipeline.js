/** 
 * Plasma pipeline 
 * @preload
 * this.load.script("PlasmaPipeline", 'assets/filters/PlasmaPipeline.js');
 * or
 * AssetLoader.loadPipeline(this, "PlasmaPipeline");
 * @create
 * this.plasmaPipeline = this.game.renderer.pipelines.add('Plasma', new PlasmaPipeline(this.game));
 * plasmaPipeline.setTextureSize(go.displayWidth, go.displayHeight);
 * go.setPipeline('Plasma');
 * @update
 * this.plasmaPipeline.time += 0.01;
 * */ 
var PlasmaPipeline = new Phaser.Class({
    Extends: Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline,
    initialize:
        function PlasmaPipeline(game) {
            Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline.call(this, {
                game: game,
                renderer: game.renderer,
                fragShader: `
                precision mediump float;
                uniform sampler2D uMainSampler;
                uniform vec2 uResolution;
                uniform float uTime;

                varying vec2 outTexCoord;

                const float PI = 3.14159265;
                float time = uTime * 0.2; // make it slow

                void main(void ) {

                    vec4 pixel_color = texture2D(uMainSampler, outTexCoord);
                    if (pixel_color.a == 0.0) discard; // discard transparent area

                    float color1, color2, color;
                    color1 = (sin(dot(gl_FragCoord.xy,vec2(sin(time*3.0),cos(time*3.0)))*0.02+time*3.0)+1.0)/2.0;
                    vec2 center = vec2(640.0/2.0, 360.0/2.0) + vec2(640.0/2.0*sin(-time*3.0),360.0/2.0*cos(-time*3.0));
                    color2 = (cos(length(gl_FragCoord.xy - center)*0.03)+1.0)/2.0;
                    color = (color1+ color2)/2.0;

                    float red	= (cos(PI*color/0.5+time*3.0)+1.0)/2.0;
                    float green	= (sin(PI*color/0.5+time*3.0)+1.0)/2.0;
                    float blue	= (sin(+time*3.0)+1.0)/2.0;

                    gl_FragColor = vec4(red, green, blue, 1.0);
                }`
            });
        },
    time: 0.01,
    onPreRender() { // it's running continuously
        this.set1f('uTime', this.time);
    },
    setTextureSize(w, h) {
        //Ctrace(this.name + " > setTextureSize > ({0}, {1})", w, h)
        this.set2f('uResolution', w, h);
    }
});
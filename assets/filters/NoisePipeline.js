    /** 
     * Noise pipeline 
     * @source https://www.shadertoy.com/view/lsf3WH
     * @preload
     * this.load.script("NoisePipeline", 'assets/filters/NoisePipeline.js');
     * or
     * AssetLoader.loadPipeline(this, "NoisePipeline");
     * @create
     * this.noisePipeline = this.game.renderer.pipelines.add('Noise', new NoisePipeline(this.game));
     * go.setPipeline('Noise');
     * @update
     * this.noisePipeline.time += 0.01;
     * */ 
    var NoisePipeline = new Phaser.Class({
        Extends: Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline,
        initialize:
            function NoisePipeline(game) {
                Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline.call(this, {
                    game: game,
                    renderer: game.renderer,
                    fragShader: `
                precision mediump float;

                uniform float uTime;
                uniform bool uFractal;
                uniform sampler2D uMainSampler;
                uniform float uScale;
                uniform vec2 uResolution; // texture resolution (in pixels)

                varying vec2 outTexCoord;
                float hash(vec2 p) { 
                    p  = 50.0*fract( p*0.3183099 + vec2(0.71,0.113));
                    return -1.0+2.0*fract( p.x*p.y*(p.x+p.y) );
                }
                float noise( in vec2 p ){
                    vec2 i = floor( p );
                    vec2 f = fract( p );
                    vec2 u = f*f*(3.0-2.0*f);
                    return mix( mix( hash( i + vec2(0.0,0.0) ), 
                                     hash( i + vec2(1.0,0.0) ), u.x),
                                mix( hash( i + vec2(0.0,1.0) ), 
                                     hash( i + vec2(1.0,1.0) ), u.x), u.y);
                }

                void main() {

                    vec4 pixel_color = texture2D(uMainSampler, outTexCoord);
                    if (pixel_color.a == 0.0) discard; // discard transparent area

                    //vec2 p = outTexCoord.xy / uResolution.xy;
                    //vec2 uv = p*vec2(uResolution.x/uResolution.y,1.0); // + uTime*0.25;
                    vec2 uv = outTexCoord + uTime*0.25;
                    float f = 0.0;

                    // fbm - fractal noise (4 octaves)	
                    if( uFractal ) {

                        uv *= uScale;
                        mat2 m = mat2( 1.6,  1.2, -1.2,  1.6 );
                        f  = 0.5000*noise( uv ); uv = m*uv;
                        f += 0.2500*noise( uv ); uv = m*uv;
                        f += 0.1250*noise( uv ); uv = m*uv;
                        f += 0.0625*noise( uv ); uv = m*uv;
                    }
                    // simple one pass noise
                    else {
                        f = noise( uScale*4.0*uv );
                    }

                    f = 0.5 + 0.5*f;	
                    gl_FragColor = vec4( f, f, f, 1.0 );
                }`
                });
            },
        uniforms: [ // array of uniforms, not used, maybe later
            'uTime',
            'uFractal',
            'uMainSampler',
            'uScale',
            'uResolution'
        ],
        time: 0.01,
        onPreRender() { // it's running continuously
            //Ctrace("Shader > Noise > onPreRender > updating fragment shader values...")
            this.set1f('uTime', this.time);
        },
        _fractal: false,
        fractal: {
            get() { return this._fractal },
            set(state) {
                this._fractal = state;
                this.set1f('uFractal', state);
                return this;
            }
        },
        _scale: 0.8,
        scale: {
            get() { return this._scale },
            set(val) {
                this._scale = val;
                this.set1f('uScale', val);
                return this;
            }
        }
    });
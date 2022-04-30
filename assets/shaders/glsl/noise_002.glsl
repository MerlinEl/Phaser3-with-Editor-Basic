// @from https://www.shadertoy.com/view/4djSRW
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

#define ITERATIONS 2
//----------------------------------------------------------------------------------------
float hash12(in vec2 p){
	
    vec3 p3 = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}

//----------------------------------------------------------------------------------------
void main(){
	
    vec2 position = gl_FragCoord.xy;
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;

	float a = 0.0, b = a;
    for (int t = 0; t < ITERATIONS; t++) {
        
        float v = float(t+1)*.152;
        vec2 pos = (position * v + u_time * 1500. + 50.0);
        a += hash12(pos);
    	b += hash12(pos);
    }
    vec3 col = vec3(mix(b, a, step(uv.x, .5))) / float(ITERATIONS);
	gl_FragColor = vec4(col, 1.0);
}
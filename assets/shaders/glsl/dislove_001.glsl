precision mediump float;

uniform sampler2D u_tex_0;
uniform float u_time;
varying vec2 v_texcoord;

vec4 uColor = vec4(1.0, 0.0, 0.0, 1.0);
float rnd = 0.2;
float intensity = 0.0;
float colorswap = 0.8;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main (){

	// animate intensity
    intensity +=sin(1.0 + 2.0*u_time);

	float f = max(0.000, rand(vec2(gl_FragCoord.y, gl_FragCoord.x+rnd)) - rand(vec2(0, gl_FragCoord.x+rnd))*intensity);

	vec4 color = vec4(0, f, 0, texture2D(u_tex_0, v_texcoord).w * uColor.w * f);
	
	vec4 c = texture2D(u_tex_0, v_texcoord);
	float r = c.r; float b = c.b; float g = c.g;

	float swap2 = (0.5 - abs(0.5 - colorswap))*2.0;
	c.r = r*(1.0-swap2) + g*swap2;
	c.b = b*(1.0-swap2) + g*swap2;
	c.g = g*(1.0-swap2) + b*swap2;
	
	float swap1 = colorswap * (1.0 - swap2);
	r = c.r; b = c.b;
	
	c.r = r*(1.0-swap1) + b*swap1;
	c.b = b*(1.0-swap1) + r*swap1;
	
	vec4 c1 = c * uColor;
	
	// c1.w *= 1.0-intensity;
	// c1.w -= gl_FragCoord.y*0.1;
	
	gl_FragColor = c1*(1.0-intensity*2.0) + (color*intensity*2.0);
}
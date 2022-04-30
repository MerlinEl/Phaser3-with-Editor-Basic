#ifdef GL_ES
    //enable extension fwidth
    #extension GL_OES_standard_derivatives : enable
    precision mediump float;
#endif

uniform float u_time;
uniform sampler2D u_tex_0;
uniform vec2 u_resolution;
varying vec2 v_texcoord;

void main(){
	
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    
    // rect boundaries
    vec2 rectMin = vec2(0.4, 0.2);
    vec2 rectMax = vec2(0.8, 0.8);
    
    // some people prefer "min + (max - min) / 2", but for floating point UV space it
    // doesn't matter
    vec2 center = (rectMin + rectMax) / 2.0;
    vec2 halfSize = center - rectMin;
    vec2 fw = fwidth(uv);
    
    vec2 dist = abs(uv - center);
    
    float col = 0.0;
    if (all(lessThan(dist, halfSize)) && any(greaterThan(dist, halfSize - fw))) {
        // for pixel here I could use gl_FragCoord.xy, but on textures you don't have it
        // using fwidth is a tricky way to operate in screenspace sizes on all surfaces
        // of course it's an approximation, but it's a pretty good one, here, uncomment this 
        // line to try gl_FragCoord, it gives almost the same result:
        //vec2 pixel = gl_FragCoord.xy;
        vec2 pixel = uv / fw;
        float aspect = halfSize.y / halfSize.x;
        float dir = (dist.x * aspect > dist.y) ?
              -sign(uv.x - center.x) : sign(uv.y - center.y);
        float dash = step(0.5, fract((pixel.x + pixel.y) * dir / 10.0 + u_time));
        col = mix(1.0, 0.0, dash);
    }
	gl_FragColor = vec4(col, col, col, 1.0);
}
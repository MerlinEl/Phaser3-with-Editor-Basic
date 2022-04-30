#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D u_tex_0;
uniform vec2 u_mouse;

varying vec2 v_texcoord;

float circle_radius = 120.0;

void main(){

    vec4 pixel_color = texture2D(u_tex_0, v_texcoord);
    float gray = dot(pixel_color.rgb, vec3(0.299, 0.587, 0.114));
    if (pixel_color.a < 0.5) discard; // discard transparent pixels
    
    vec2 pos = vec2(gl_FragCoord.x, gl_FragCoord.y);
    // show image color inside circle
    if (distance(pos, u_mouse) < circle_radius) {
        
        gl_FragColor = pixel_color;
    // show image gray out of circle
    } else {

        gl_FragColor = vec4(vec3(gray), 1.0);
    }
}
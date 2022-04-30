precision mediump float;

// #define Smooth true;

uniform sampler2D u_tex_0;

varying vec2 v_texcoord;

vec3 outline_color = vec3(0.8314, 1.0, 0.0);
vec2 stepSize = vec2(10.0);
float intensity = 0.3;

void main(void) {
    vec4 pixel_color = texture2D(u_tex_0, v_texcoord);
    if (pixel_color.a == 1.0){ // fill color
        
        gl_FragColor = pixel_color;

    } else { // outline color
        
        float alpha = pixel_color.a*4.0;
        alpha -= texture2D( u_tex_0, v_texcoord + vec2( stepSize.x, 0.0 ) ).a;
        alpha -= texture2D( u_tex_0, v_texcoord + vec2( -stepSize.x, 0.0 ) ).a;
        alpha -= texture2D( u_tex_0, v_texcoord + vec2( 0.0, stepSize.y ) ).a;
        alpha -= texture2D( u_tex_0, v_texcoord + vec2( 0.0, -stepSize.y ) ).a;
        gl_FragColor = vec4( outline_color, intensity*alpha );
    }
}
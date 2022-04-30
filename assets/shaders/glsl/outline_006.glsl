// src 
// https://stackoverflow.com/questions/46832139/how-can-i-check-whether-a-fragment-lies-on-the-edge-of-a-texture

precision mediump float;

uniform sampler2D u_tex0;
uniform vec2 u_resolution;
varying vec2 v_texcoord;

float outline_thickness = 4.0;
float outline_threshold = 0.5;
vec3 outline_colour = vec3(1.0, 0.0, 0.7843);

void main(){
    
    vec4 pixel = texture2D(u_tex0, v_texcoord.xy);
    if (pixel.a < 1.0) { // process transparent pixels

        vec2 offx = vec2(outline_thickness / u_resolution.x, 0.0);
        vec2 offy = vec2(0.0, outline_thickness / u_resolution.y);

        // 4 sourounding texels
        // float surroundingAlphaSum = 
        //     texture2D(u_tex0, v_texcoord.xy + offx).a +
        //     texture2D(u_tex0, v_texcoord.xy - offx).a +
        //     texture2D(u_tex0, v_texcoord.xy + offy).a +
        //     texture2D(u_tex0, v_texcoord.xy - offy).a;
        // if (4.0 * pixel.a - surroundingAlphaSum > 0.0){

        // 8 sourounding texels
        float surroundingAlphaSum = 
            texture2D(u_tex0, v_texcoord.xy + offx).a +
            texture2D(u_tex0, v_texcoord.xy - offx).a +
            texture2D(u_tex0, v_texcoord.xy + offy).a +
            texture2D(u_tex0, v_texcoord.xy - offy).a +
            texture2D(u_tex0, v_texcoord.xy + offx + offy).a +
            texture2D(u_tex0, v_texcoord.xy + offx - offy).a +
            texture2D(u_tex0, v_texcoord.xy - offx + offy).a +
            texture2D(u_tex0, v_texcoord.xy - offx - offy).a;

        // If one of the surrounding pixels is transparrent --> an edge is detected
        if (8.0 * pixel.a - surroundingAlphaSum > 0.0){

            pixel = vec4(outline_colour, 1.0);

        } else {

            pixel = vec4(0.0); // transparrent  
        } 
        // pixel.a *= 0.5; // smooth outline
    }
    gl_FragColor = pixel;
}

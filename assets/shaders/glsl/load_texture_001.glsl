#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D u_tex_0;
varying vec2 v_texcoord;

void main(){
    gl_FragColor=texture2D(u_tex_0, v_texcoord);
}
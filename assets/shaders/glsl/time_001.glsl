
precision mediump float;
uniform float u_time;

vec4 v_color = vec4(1.0, 0.0, 1.0, 1.0);
void main() {
  
  v_color.r *= 0.5 * (1.0 + sin(4.0*u_time) );
  v_color.g *= 0.5 * (1.0 + sin(1.0 + 2.0*u_time) );

  gl_FragColor = v_color;
}
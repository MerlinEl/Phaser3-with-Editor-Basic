precision mediump float;

uniform vec2 uResolution;
uniform vec2 u_mouse;
uniform float u_time;

// vec2 uResolution = vec2(800, 600);

void main() {
    vec2 st = gl_FragCoord.xy / uResolution.xy;
    st.x *= uResolution.x / uResolution.y;

    vec3 color = vec3(0.0);
    color = vec3(st.x, st.y, abs(sin(u_time)));

    gl_FragColor = vec4(color, 1.0);
}
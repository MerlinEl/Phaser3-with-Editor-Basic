precision mediump float;

uniform sampler2D u_tex_0;
varying vec2 v_texcoord;

// uniform vec2 thickness;
// uniform vec4 outlineColor;
// uniform vec4 filterClamp;

const float DOUBLE_PI = 3.14159265358979323846264 * 2.;
const float angle_step = 0.01;
const vec3 outline_color = vec3(0.8941, 0.0471, 0.6275);
const vec2 thickness = vec2(10.0, 10.0);
const vec4 filterClamp = vec4(0.0, 0.0, 0.0, 1.0);

void main(void) {
    vec4 pixel_color = texture2D(u_tex_0, v_texcoord);
    vec4 curColor;
    float maxAlpha = 0.;
    vec2 displaced = vec2(0.0);
    for (float angle = 0.; angle <= DOUBLE_PI; angle += angle_step) {
        displaced.x = v_texcoord.x + thickness.x * cos(angle);
        displaced.y = v_texcoord.y + thickness.y * sin(angle);
        curColor = texture2D(u_tex_0, clamp(displaced, filterClamp.xy, filterClamp.zw));
        maxAlpha = max(maxAlpha, curColor.a);
    }
    float resultAlpha = max(maxAlpha, pixel_color.a);
    gl_FragColor = vec4((pixel_color.rgb + outline_color.rgb * (1. - pixel_color.a)) * resultAlpha, resultAlpha);
}
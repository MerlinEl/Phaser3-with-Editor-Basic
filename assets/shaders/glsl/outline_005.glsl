#version 320 es

precision mediump float;

uniform sampler2D u_tex0;
uniform vec2 u_resolution;
uniform vec2 u_texcoord;

vec4 v_colour = vec4(1.0, 0.0, 0.0, 1.0);
float outline_thickness = 0.2;
float outline_threshold = 0.5;
vec3 outline_colour = vec3(0,0,1);

out vec4 pixel;
in vec2 tex_coords;

void main(){
    
    pixel = texture(u_tex0, tex_coords);
    if (pixel.a <= outline_threshold) {
        
        ivec2 size = textureSize(u_tex0, 0);
        float uv_x = tex_coords.x * float(size.x);
        float uv_y = tex_coords.y * float(size.y);
        float sum = 0.0;
        
        for (int n = 0; n < 9; ++n) {
            uv_y = (tex_coords
            .y * float(size.y)) + (outline_thickness * float(float(n) - 4.5));
            float h_sum = 0.0;
            h_sum += texelFetch(u_tex0, ivec2(uv_x - (4.0 * outline_thickness), uv_y), 0).a;
            h_sum += texelFetch(u_tex0, ivec2(uv_x - (3.0 * outline_thickness), uv_y), 0).a;
            h_sum += texelFetch(u_tex0, ivec2(uv_x - (2.0 * outline_thickness), uv_y), 0).a;
            h_sum += texelFetch(u_tex0, ivec2(uv_x - outline_thickness, uv_y), 0).a;
            h_sum += texelFetch(u_tex0, ivec2(uv_x, uv_y), 0).a;
            h_sum += texelFetch(u_tex0, ivec2(uv_x + outline_thickness, uv_y), 0).a;
            h_sum += texelFetch(u_tex0, ivec2(uv_x + (2.0 * outline_thickness), uv_y), 0).a;
            h_sum += texelFetch(u_tex0, ivec2(uv_x + (3.0 * outline_thickness), uv_y), 0).a;
            h_sum += texelFetch(u_tex0, ivec2(uv_x + (4.0 * outline_thickness), uv_y), 0).a;
            sum += h_sum / 9.0;
        }

        if (sum / 9.0 >= 0.0001) {
            pixel = vec4(outline_colour, 1);
        }
    }
}

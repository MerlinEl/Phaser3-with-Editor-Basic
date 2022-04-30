#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

float line(vec2 uv, vec2 pt1, vec2 pt2,vec2 u_resolution){
    
    float clrFactor = 0.0;
    float tickness = 3.0 / max(u_resolution.x, u_resolution.y);  //only used for tickness
    
    float r  = distance(uv, pt1) / distance(pt1, pt2);
    
    if(r <= 1.0) // if desired Hypothetical circle in range of vector(pt2,pt1)
    {
        vec2 ptc = mix(pt1, pt2, r); // ptc = connection point of Hypothetical circle and line calculated with interpolation
        float dist = distance(ptc, uv);  // distance betwenn current pixel (uv) and ptc
        if(dist < tickness / 2.0)
        {
            clrFactor = 1.0;
        }
    }
    return clrFactor;
}



void main()
{
    vec2 uv = gl_FragCoord.xy / u_resolution.xy; //current point
    //uv = current pixel
    //      0 < uv.x < 1 , 0 < uv.x < 1
    //      left-down= (0,0)
    //      right-top= (1,1)
    
    vec2 pt1 = vec2(0.1, 0.1);  //line point1 
    vec2 pt2 = vec2(0.8, 0.7);  //line point2 
       
    
    float lineFactor = line(uv, pt1, pt2, u_resolution.xy);
    vec3 color = vec3(.5, 0.7 , 1.0);
    
    gl_FragColor = vec4(color * lineFactor , 1.);
}
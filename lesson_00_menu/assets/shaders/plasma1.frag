


#ifdef GL_ES
precision lowp float;
#endif






#ifdef GL_ES
precision lowp float;
#endif


uniform float time;
uniform vec2 resolution;


const float count = 3.0;
const float speed = .9;


float Hash( vec2 p, in float s)
{
    vec3 p2 = vec3(p.xy,27.0 * abs(sin(s)));
    return fract(sin(dot(p2,vec3(35.1,36.7, 2.4)))*258.5453123);
}


float noise(in vec2 p, in float s)
{
    vec2 i = floor(p);
    vec2 f = fract(p);
    f *= f * (3.0-2.0*f);
    
    
    return mix(mix(Hash(i + vec2(0.,0.), s), Hash(i + vec2(1.,0.), s),f.x),
               mix(Hash(i + vec2(0.,1.), s), Hash(i + vec2(1.,1.), s),f.x),
               f.y) * s;
}


float fbm(vec2 p)
{
    float v = - noise(p * 02., 0.25);
    v += noise(p * 01.1, 0.5) - noise(p * 01.1, 0.25);
    v += noise(p * 02.1, 0.25) - noise(p * 02.1, 0.125);
    v += noise(p * 04.1, 0.125) - noise(p * 08.1, 0.0625);
    v += noise(p * 08.1, 0.0625) - noise(p * 16., 0.03125);
    v += noise(p * 16.1, 0.03125);
	v += noise(p * 42.1, 0.0125);
    return v;
}


void main( void )
{
    float worktime = (time * (speed * 1.5)) + 1.0;
    
    vec2 uv = ( gl_FragCoord.xy / resolution.xy ) * 2.0 - 1.225;
    uv.y *= resolution.y/resolution.x;
    
    
    vec3 finalColor = vec3( 0.0, 0.0, 0.0 );
    for( float i = 1.0; i < count + 1.; i++ )
    {
        float t = abs(1.0 / ((uv.y + fbm( uv + worktime / i )) * (i * 35.0)));
        finalColor +=  t * vec3(1.5, 1.5, .5);
    }
    
    gl_FragColor = vec4( finalColor, 1.0 );
    
    
}
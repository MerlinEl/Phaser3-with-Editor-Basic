//Radial-Gradient-Shader
//https://github.com/SFML/SFML/wiki/Source:-Radial-Gradient-Shader

const char VertexShader[] =
"void main()"
"{"
	"gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;"
	"gl_TexCoord[0] = gl_TextureMatrix[0] * gl_MultiTexCoord0;"
	"gl_FrontColor = gl_Color;"
"}";

const char RadialGradient[] =
"uniform vec4 color;"
"uniform vec2 center;"
"uniform float radius;"
"uniform float expand;"
"uniform float windowHeight;"
"void main(void)"
"{"
"vec2 centerFromSfml = vec2(center.x, windowHeight - center.y);"
"vec2 p = (gl_FragCoord.xy - centerFromSfml) / radius;"
	"float r = sqrt(dot(p, p));"
	"if (r < 1.0)"
	"{"
		"gl_FragColor = mix(color, gl_Color, (r - expand) / (1 - expand));"
	"}"
	"else"
	"{"
		"gl_FragColor = gl_Color;"
	"}"
"}";

int main()
{
	if (!sf::Shader::isAvailable())
	{
		std::cerr << "Shaders are not available." << std::endl;
		return EXIT_FAILURE;
	}

	sf::RenderWindow window(sf::VideoMode(800, 600), "Radial Gradient", sf::Style::Default);
	window.setFramerateLimit(30);

	sf::CircleShape circle;
	sf::RectangleShape rectangle;
	sf::Shader shader;

	circle.setRadius(100.f);
	circle.setOrigin(circle.getRadius(), circle.getRadius());
	circle.setPosition(sf::Vector2f(window.getSize()) / 2.f);
	circle.setFillColor(sf::Color::Transparent);

	rectangle.setSize({ 300.f, 200.f });
	rectangle.setFillColor(sf::Color::Yellow);
	rectangle.setOrigin(rectangle.getLocalBounds().width / 2.f, rectangle.getLocalBounds().height / 2.f);
	rectangle.setPosition(sf::Vector2f(window.getSize()) / 4.f);

	shader.loadFromMemory(VertexShader, RadialGradient);
	shader.setUniform("windowHeight", static_cast<float>(window.getSize().y)); // this must be set, but only needs to be set once (or whenever the size of the window changes)

	while (window.isOpen())
	{
		sf::Event event;
		while (window.pollEvent(event))
		{
			if (event.type == sf::Event::Closed || event.type == sf::Event::KeyPressed && event.key.code == sf::Keyboard::Escape)
				window.close();
		}

		window.clear();
		shader.setUniform("color", sf::Glsl::Vec4(1.f, 0.f, 0.f, 1.f)); // Red color hex, normalized ([0 .. 255] to [0 .. 1])
		shader.setUniform("center", rectangle.getPosition() + sf::Vector2f(100.f, 100.f));
		shader.setUniform("radius", 200.f);
		shader.setUniform("expand", 0.25f);
		window.draw(rectangle, &shader);
		shader.setUniform("color", sf::Glsl::Vec4(0.f, 0.f, 1.f, 1.f)); // Blue color hex, normalized ([0 .. 255] to [0 .. 1])
		shader.setUniform("center", circle.getPosition());
		shader.setUniform("radius", circle.getRadius());
		shader.setUniform("expand", 0.f);
		window.draw(circle, &shader);
		window.display();
	}

	return EXIT_SUCCESS;
}
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NewsPulse - Home</title>
    <link rel="stylesheet" href="./assets/css/style.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">NewsPulse</div>
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./register.html">Register</a></li>
                <li><a href="./login.html">Login</a></li>
                <li><a href="./dashboard.html">Dashboard</a></li>
                <li><a href="./about.html">About Us</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="intro">
            <h1>Welcome to NewsPulse</h1>
            <p>Your source for the latest and most reliable news updates.</p>
            <section class="cta-buttons">
                <a href="./register.html" class="btn">Register</a>
                <a href="./login.html" class="btn">Login</a>
            </section>
        </section>
        <section class="posts">
            <div class="post">
                <img src="https://i.natgeofe.com/k/5fc06c33-0945-4d95-b6b3-5e4040637b09/earthquake-houses.jpg" alt="Major Earthquake Hits Central City">
                <h2>Major Earthquake Hits Central City</h2>
                <p>A powerful earthquake struck Central City today, causing widespread damage and chaos. Emergency services are currently working to assess the full extent of the damage and provide aid to those affected. Authorities urge residents to stay calm and follow evacuation orders. The earthquake, which registered a magnitude of 7.2, was felt across a large area, and aftershocks are expected throughout the day.</p>
            </div>
            <div class="post">
                <img src="https://www.nationalgrid.com/sites/default/files/styles/content_embedded_image/public/images/EnergyExplained_DifferentTypesRenewableEnergy_640x360.jpg" alt="Breakthrough in Renewable Energy Technology">
                <h2>Breakthrough in Renewable Energy Technology</h2>
                <p>Scientists have announced a major breakthrough in renewable energy technology that could revolutionize the industry. The new technology promises to significantly increase the efficiency of solar panels, making renewable energy more accessible and cost-effective. This innovation comes at a crucial time as the world faces growing concerns about climate change and energy sustainability.</p>
            </div>
            <div class="post">
                <img src="https://cdn.prod.website-files.com/6488c1c7b73f309f8954228f/64890ba38bfc729866b514e6_CIA_main%20logo%20dark.png" alt="Local Community Wins National Award for Innovation">
                <h2>Local Community Wins National Award for Innovation</h2>
                <p>The local community has won a prestigious national award for its innovative approach to urban development. The award recognizes efforts to integrate green spaces, promote sustainable living, and enhance community engagement. The project has garnered attention for its holistic approach to creating a more livable and environmentally-friendly urban environment.</p>
            </div>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 NewsPulse. All rights reserved.</p>
        <div class="social-links">
            <a href="https://instagram.com" target="_blank"><img src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="Instagram"></a>
            <a href="https://facebook.com" target="_blank"><img src="https://img.icons8.com/ios/50/000000/facebook-new.png" alt="Facebook"></a>
            <a href="https://twitter.com" target="_blank"><img src="https://img.icons8.com/ios/50/000000/twitter.png" alt="Twitter"></a>
        </div>
    </footer>
    <script src="./assets/js/script.js"></script>
</body>
</html>
    `);
    
    res.end();
});

server.listen(9000, () => {
    console.log("Server is running @ http://localhost:9000");
});

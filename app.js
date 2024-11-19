const express = require('express');
const app = express();
const port = 3000;

// Route for the home page
app.get('/', (req, res) => {
    const emojis = `
        <h1>HI Prathyu Here! 😃</h1>
        <p>heeeeeeeeeee:</p>
        <div style="font-size: 2rem;">
            🌟 🌍 🚀 🐱‍👤 🎉 🍕 ❤️
        </div>
    `;
    res.send(emojis);
});

// Start the server
app.listen(port, () => {
    console.log(`Emoji app is running at http://localhost:${port}`);
});

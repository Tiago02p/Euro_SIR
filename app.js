const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/hello', (req, res) => {
    return res.send('Hello');
});

app.get('/projeto/public/euro.js', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    return res.json(generateBet());
});

function generate(n, min, max) {
    let set = new Set();
    while (set.size < n) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        set.add(num);
    }
    return Array.from(set).sort((a, b) => a - b);
}

function generateBet() {
    return {
        numbers: generate(5, 1, 50),
        stars: generate(2, 1, 12)
    };
}

app.listen(3000, () => {
    console.log("listening on port 3000");
});

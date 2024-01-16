const http = require('node:http');
const url = require('url');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] ** 2;
    }
    return sum;
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // Parse query parameters from the URL
    const urlParts = url.parse(req.url, true);
    const query = urlParts.query;

    // Extract numbers from the 'numbers' query parameter
    const numbers = query.numbers ? query.numbers.split(',').map(Number) : [1, 2, 4, 4];

    // Calculate the square sum
    const result = squareSum(numbers);

    // Convert the square sum to a string before sending as a response
    res.end(`Square Sum: ${result}`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

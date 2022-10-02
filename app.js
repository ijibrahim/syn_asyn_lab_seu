const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send(`
    <div>
        <a href="http://localhost:${port}/sync">synchronous</a>  | 
        <a href="http://localhost:${port}/async">asynchronous </a>
    </div>
    `);
})

app.get('/sync', (req, res) => {
    const data = fs.readFileSync('file.txt','utf-8');
    console.log(data)
    console.log("After the data sync")
})

app.get('/async', (req, res) => {
    fs.readFile('file.txt','utf-8', (err, data) => {
        console.log(data)
    });
    console.log("After the data async")
})

app.listen(port, () => console.log('Listening on port 3000'))



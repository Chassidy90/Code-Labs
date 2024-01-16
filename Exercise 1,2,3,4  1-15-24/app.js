const path = require('path');

const express = require('express');
const app = express();

const PORT  = 3000;

app.listen(PORT)

app.use(express.static(path.resolve(__dirname, './public')));
app.get('/', (req,res) =>{
    res.sendFile (path.resolve(__dirname, './public/example.html'));
})

app.get('/about', (req,res) =>{
    res.send ('Hello on the about page');
})

app.all('*', (req,res) =>{
    res.status(404).send ('Page Not Found');
})
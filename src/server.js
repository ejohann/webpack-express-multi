const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.get('/', function(req, res){
    const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, function(){
    console.log('Server is running on localhost 3000');
})
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.use(express.static('public'));

app.listen(3000, () => console.log('Servidor corriendo por el puerto '+ port));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));


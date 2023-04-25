const express = require('express');
const app = express();
const portfinder = require('portfinder');
app.use(express.static('pubi'));

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "online cources",
   port:3307
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
   
  });



app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html');

  
  });
  let qtn=0;
  let prix=0;
  app.get('/by', (req, res) => {
  
qtn++
  prix  
    });
  



portfinder.getPort((err, port) => {
    if (err) {
      console.error(err);
      return;
    }
    app.listen(port, () => {
      console.log(`Serveur web démarré sur le port ${port}`);
    });
  });
  
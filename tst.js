const express = require('express');
const mysql = require('mysql');
const app = express();

// Create MySQL connection
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "online cources",
   port:3307
  });

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database!');
});

// Create route to retrieve data from database
app.get('/', (req, res) => {
  let sql = 'SELECT * FROM userr';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.send(result)
  });
});




app.get('/in', (req, res) => {
    
      res.sendFile(__dirname+'/in.html');
  
   
  });
// Start the server
app.listen(3006, () => {
  console.log('Server started on port 3006');
});

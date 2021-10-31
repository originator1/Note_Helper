const express = require("express");
const path = require('path');
const api = require('./routes/index.js');


const PORT = process.env.PORT || 3001;

const app = express();

//middleware for parsing JSON urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// turn on routes
// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

//GET route for homepage
app.get ('/', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET route for notes page
app.get ('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);








// turn on connection to server
app.listen(PORT, () => console.log("Now listening on Port: " + PORT));

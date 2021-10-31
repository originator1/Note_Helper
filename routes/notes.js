const notes = require('express').Router();
const fs = require("fs");
const { readFromFile, readAndAppend } = require('../helpers/fsHelper');


// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
  console.info(`${req.method} request received to add a tip`);
  console.log(req.body);

  const { title, text } = req.body;

  if(req.body) {
    const newNote = {
      title,
      text,
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
    console.log(newNote);
  } else {
    res.error('Error in adding note');
  }
  
});

//module.exports = function (app) {
  // app.get("/api/notes", (req, res) => {
  //   console.log("hey");
  //   fs.readFile("./db/db.json", (err, data) => {
  //     if (err) throw err;
  //     console.log(JSON.parse(data));
  //     res.send(JSON.parse(data));
  //   });
  // });
  // console.log("Hey");

  //app.post("/api/notes", (req, res) => {});
  
//};

module.exports = notes;



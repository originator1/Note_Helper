// const path = require("path");

// module.exports = function(app){

//     app.get("/notes", (req, res) => {
//         console.log(__dirname);
//         res.sendFile(path.join(__dirname,"../public/notes.html"))
//     });

//     app.get("*", (req, res) => {
//         console.log(__dirname);
//         res.sendFile(path.join(__dirname,"../public/index.html"))
//     });


// };

// const html = require('express').Router();
// const fs = require("fs");
// const { readFromFile, readAndAppend } = require('../helpers/fsHelper');


// // GET Route for retrieving all the notes
// html.get('/', (req, res) => {
//   console.info(`${req.method} request received for notes`);
//   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });

// html.post('/', (req, res) => {
//   console.info(`${req.method} request received to add a tip`);
//   console.log(req.body);

//   const { title, text } = req.body;

//   if(req.body) {
//     const newNote = {
//       title,
//       text,
//     };

//     readAndAppend(newNote, './db/db.json');
//     res.json(`Note added successfully`);
//     console.log(newNote);
//   } else {
//     res.error('Error in adding note');
//   }
  
// });

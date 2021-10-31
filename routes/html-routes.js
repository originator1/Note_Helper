const path = require("path");

module.exports = function(app){

    app.get("/notes", (req, res) => {
        console.log(__dirname);
        res.sendFile(path.join(__dirname,"../public/notes.html"))
    });

    app.get("*", (req, res) => {
        console.log(__dirname);
        res.sendFile(path.join(__dirname,"../public/index.html"))
    });


};



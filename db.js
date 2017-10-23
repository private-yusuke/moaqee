var Datastore = require("nedb");

var db = new Datastore({
    filename: "Database.db",
    timestampData: true,
    autoload: true,
    onload: err => {
        if(err) console.log(err);
        console.log("Database loaded");
    }
});

module.exports = db;
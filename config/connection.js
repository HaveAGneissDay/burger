// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "burgers_DB"
});

connection.connect(function (err) {
    if (err) throw err;
});
};

// Make the connection to MySQL
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for ORM use
module.exports = connection;
var mysql = require("mysql");

if (process.env.DATABASE_URL) {
  connection = mysql.createConnection(process.env.DATABASE_URL);
} else {
  connection = mysql.createConnection({
  port: 8889,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

let express = require("express");
let exphbs = require("express-handlebars");
let mysql = require("mysql");

let app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080; //PORT changing into the next field

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "YourRootPassword",
  database: "moviePlanner_db"// change the database if choosing to import into next model// 
                                
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});
require("controllers/burgers_controller")(app)
// Use Handlebars to render the main index.html page with the plans in it.

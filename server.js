const express = require("express");
const helmet = require('helmet');
const compression = require('compression');
const routes = require('./routes');
const database = require('./config/db');
const route = express.Router();
const app = express();

app.use(helmet());
app.use(compression());
app.use("/", routes)
// add this below app.use("/", routes) to make index.html a static file
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
});

router(app);                

database.connect();
const dbPath = "mongodb://127.0.0.1/Chat_Application";
mongoose.connect(dbPath, { useNewUrlParser: true });
mongoose.connection.once("open", function() {
  console.log("Database Connection Established Successfully.");
});


  
 



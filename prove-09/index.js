var express = require("express");
var app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => res.sendFile(__dirname + "/public/rates.html"));

//DO /GETRATE ROUTE HERE
app.get("/getRate", (req, res) => res.render("calculate_rate"));

app.listen(PORT, function() {
  console.log(`Running on ${PORT}`);
});

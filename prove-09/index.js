var express = require("express");
var app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => res.sendFile(__dirname + "/public/rates.html"));

//DO /GETRATE ROUTE HERE
app.get("/getRate", calculateRate);

app.listen(PORT, function() {
  console.log(`Running on ${PORT}`);
});

//HandleRate function
function calculateRate(req, res) {
  const weight = req.query.weight;
  const type = req.query.type;
  var result;

  switch (String(type)) {
    case "letter-stamped":
      if (weight > 3) {
        result = 1.0;
      } else {
        result = 0.55 + Math.floor(weight - 1) * 0.15;
      }
      break;

    case "letter-metered":
      if (weight > 3) {
        result = 0.95;
      } else {
        result = 0.5 + Math.floor(weight - 1) * 0.15;
      }
      break;

    case "large-envelope":
      result = 1 + Math.floor(weight - 1) * 0.15;
      break;

    case "first-class-retail-package":
      if (weight > 12) {
        result = 5.71;
      } else if (weight >= 8) {
        result = 5.19;
      } else if (weight >= 4) {
        result = 4.39;
      } else {
        result = 3.66;
      }
      break;

    default:
      break;
  }

  const params = { weight: weight, type: type, result: result.toFixed(2) };

  res.render("calculate_rate", params);
}

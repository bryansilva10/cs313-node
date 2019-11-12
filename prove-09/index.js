var express = require("express");
var app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);
});

app.get("/getRate", function(req, res) {
  rate = calculateRate(req.query.weight, req.query.option);
  message = "The rate for this service is $" + rate.toFixed(2);

  if (rate == -1) {
    message = "The data input is invalid - maybe too heavy?";
  }

  data = {
    message: message
  };

  res.render("calculate_rate", data);
  res.end();
});

/************************** */
function calculateRate(weight, type) {
  var rate = 0;

  if (type == "stamped") {
    if (weight > 0 && weight <= 1) {
      rate = 0.5;
    } else if (weight > 1 && weight <= 2) {
      rate = 0.71;
    } else if (weight > 2 && weight <= 3) {
      rate = 0.92;
    } else if (weight > 3 && weight <= 3.5) {
      rate = 1.13;
    } else {
      rate = -1;
    }

    return rate;
  }

  if (type == "metered") {
    if (weight > 0 && weight <= 1) {
      rate = 0.47;
    } else if (weight > 1 && weight <= 2) {
      rate = 0.68;
    } else if (weight > 2 && weight <= 3) {
      rate = 0.89;
    } else if (weight > 3 && weight <= 3.5) {
      rate = 1.1;
    } else {
      rate = -1;
    }

    return rate;
  }

  if (type == "flats") {
    if (weight > 0 && weight <= 1) {
      rate = 1.0;
    } else if (weight > 1 && weight <= 2) {
      rate = 1.21;
    } else if (weight > 2 && weight <= 3) {
      rate = 1.42;
    } else if (weight > 3 && weight <= 4) {
      rate = 1.63;
    } else if (weight > 4 && weight <= 5) {
      rate = 1.84;
    } else if (weight > 5 && weight <= 6) {
      rate = 2.05;
    } else if (weight > 6 && weight <= 7) {
      rate = 2.26;
    } else if (weight > 7 && weight <= 8) {
      rate = 2.47;
    } else if (weight > 8 && weight <= 9) {
      rate = 2.68;
    } else if (weight > 9 && weight <= 10) {
      rate = 2.89;
    } else if (weight > 10 && weight <= 11) {
      rate = 3.1;
    } else if (weight > 11 && weight <= 12) {
      rate = 3.31;
    } else if (weight > 12 && weight <= 13) {
      rate = 3.52;
    } else {
      rate = -1;
    }

    return rate;
  }

  if (type == "retail") {
    if (weight > 0 && weight <= 1) {
      rate = 3.5;
    } else if (weight > 1 && weight <= 2) {
      rate = 3.5;
    } else if (weight > 2 && weight <= 3) {
      rate = 3.5;
    } else if (weight > 3 && weight <= 4) {
      rate = 3.5;
    } else if (weight > 4 && weight <= 5) {
      rate = 3.75;
    } else if (weight > 5 && weight <= 6) {
      rate = 3.75;
    } else if (weight > 6 && weight <= 7) {
      rate = 3.75;
    } else if (weight > 7 && weight <= 8) {
      rate = 3.75;
    } else if (weight > 8 && weight <= 9) {
      rate = 4.1;
    } else if (weight > 9 && weight <= 10) {
      rate = 4.45;
    } else if (weight > 10 && weight <= 11) {
      rate = 4.8;
    } else if (weight > 11 && weight <= 12) {
      rate = 5.15;
    } else if (weight > 12 && weight <= 13) {
      rate = 5.5;
    } else {
      rate = -1;
    }

    return rate;
  }
}

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

const data={
    "name": "Santhosh N G",
    "roll_number" : "22BAD086",
    "age": 19,
    "date_of_birth": "26.10.2004"
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.render("forms.ejs",{
    data:data 
  });
});

app.listen(port, () => {
  console.log("server is started...");
});
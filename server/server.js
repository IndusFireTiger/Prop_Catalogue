const express = require("express");
const bodyParser = require("body-parser");
const router = require("./src/routes/home");

const port = 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
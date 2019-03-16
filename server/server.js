const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router()

const port = 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

router.get("/", (req, res) => {
    res.status(200)
    res.send('OK')
})

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
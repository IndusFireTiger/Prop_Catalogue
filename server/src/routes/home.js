const express = require('express')
const fs = require('fs')

const router = express.Router()

router.get("/getData", (req, res) => {
    fs.readFile('./static/data.json', (err, data) => {
        if(err) {
            console.log(err)
            res.send(400)
            return
        }
        res.status(200)
        res.json(JSON.parse(data))
    })
})

module.exports = router
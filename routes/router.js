const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get('/page-one', (req, res) => {
    res.render('page-one')
})

module.exports = router;

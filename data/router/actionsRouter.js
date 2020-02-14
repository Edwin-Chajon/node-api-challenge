const express = require("express");

const router = express.Router();

const Actions = require("../helpers/actionModel");



router.get("/", (req, res) => {
    Actions.get()
      .then(data => {
        res.status(200).json(data);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          errorMessage: "Error, actions could not be found."
        });
      });
  });









module.exports = router;
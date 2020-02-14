const express = require("express");

const router = express.Router();

const Projects = require("../helpers/projectModel");



router.get("/", (req, res) => {
    Projects.get()
      .then(data => {
        res.status(200).json(data);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          errorMessage: "Error retrieving projects."
        });
      });
  });
  










module.exports = router;
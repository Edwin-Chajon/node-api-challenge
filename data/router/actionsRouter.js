const express = require("express");

const router = express.Router();

const Actions = require("../helpers/actionModel");


// get all
router.get("/", (req, res) => {
    Actions.get().then(data => {res.status(200).json(data)})
           .catch(err => {res.status(500).json({Message: "Error, actions could not be found."})});
  });

//get by id
router.get("/:id", (req, res) => {
    const id = req.params.id;
    Actions.get(id).then(data => {{res.status(200).json(data)}})
           .catch(error => {res.status(500).json({Message: "actions cannot not be found"})});
});








module.exports = router;
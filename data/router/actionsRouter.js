const express = require("express");

const router = express.Router();

const Actions = require("../helpers/actionModel");


// get all
router.get("/", (req, res) => {
    Actions.get().then(data => {res.status(200).json(data)})
           .catch(err => {res.status(500).json({Message: "no actions found"})});
  });

//get by id
router.get("/:id", (req, res) => {
    const id = req.params.id;
    Actions.get(id).then(data => {{res.status(200).json(data)}})
           .catch(error => {res.status(500).json({Message: "no actions found"})});
});

// add actions
router.post("/", (req, res) => {
  const action = req.body;

  Actions.insert(action).then(post => {
      action.project_id && action.description && action.notes ?
        res.status(201).json(post)
      : res.status(400).json({Message: "notes and id required"})})
    .catch(error => {res.status(500).json({message: "Error action."})});

});

// delete action
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Actions.remove(id).then(deleteded => {
            !id ?
              res.status(404).json({message: "id does not exist"})
            : res.status(200).json({ deleteded })})
          .catch(err => {res.status(500).json({message: "Action couldn't be deleted"})});
});

//change action
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const  actions = req.body;

  Actions.update(id,  actions).then(update => {
    actions.notes && actions.description && actions.completed ?
        res.status(200).json({ update})
      : res.status(400).json({ errorMessage: "could not edit"})})
    .catch(err => {res.status(500).json({message: "action could not be updated"})});
});

module.exports = router;
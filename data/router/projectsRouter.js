const express = require("express");

const router = express.Router();

const Projects = require("../helpers/projectModel");


// get all
router.get("/", (req, res) => {
    Projects.get().then(data => {res.status(200).json(data)})
            .catch(err => {res.status(500).json({Message: "Error getting projects."})});
  });
  
//get by id
router.get("/:id", (req, res) => {
    const id = req.params.id;
    Projects.get(id).then(data => {res.status(200).json(data)})
      .catch(err => {res.status(500).json({Message: "Error getting by id."})});
});
  
//add project
router.post("/", (req, res) => {
  const project = req.body;
  Projects.insert(project).then(proj => {
            project.name && project.description ?
              res.status(201).json(proj)
            : res.status(400).json({ Message: "need both name and description"})})
          .catch(err => {res.status(500).json({Message: "Error saving this project"})});
});

//change project contents
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const project = req.body;

  Projects.update(id, project).then(updated => {
      project.name && project.description && project.completed ?
              res.status(200).json({ updated })
            : res.status(400).json({ errorMessage: "Projects could not be edited" })})
          .catch(err => {res.status(500).json({Message: "The project information couldn't update"})});
});

//delete user
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Projects.remove(id).then(deleted => {res.status(200).json({ deleted })})
    .catch(err => {res.status(500).json({Message: "could not removed"})});
});


module.exports = router;
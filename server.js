const express = require("express");

const ProjectRouters = require("./data/router/projectsRouter");
const ActionRouters = require("./data/router/actionsRouter");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {res.send('this is a thing :p');});



server.use("/api/projects" , ProjectRouters);
server.use("/api/actions" , ActionRouters);

module.exports = server;
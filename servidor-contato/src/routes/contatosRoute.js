const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.delete("/deletar/:id", controller.removeContato)
router.get("/id/:id", bodyParser.json(), controller.getById)
router.get("/nome/:nome", bodyParser.json(), controller.getByName)
router.post("/criar", bodyParser.json(), controller.add)

module.exports = router

const express = require("express")
const router = express.Router()
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.patch("/atualizar/:id", controller.atualizaContato)
router.delete("/deletar/:id", controller.removeContato)
router.get("/id/:id", controller.getById)
router.get("/nome/:nome", controller.getByName)
router.post("/criar", controller.add)

module.exports = router

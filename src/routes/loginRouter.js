const express = require("express");
const router = express.Router();
const controller = require("../controllers/loginController");

router.post("/criar", controller.criarUsuario);
router.get("/logins", controller.listaLogins);
router.patch("/atualiza/:id", controller.atualizaLogin);
router.delete("/:id", controller.deletaPorId);
router.post("/login", controller.login);

module.exports = router;

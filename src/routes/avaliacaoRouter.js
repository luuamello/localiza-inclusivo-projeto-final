const controller = require('../controllers/avaliacaoController');
const express = require('express');
const router = express.Router();

router.get("/avaliacoes", controller.avaliacoes);
router.get("/:id", controller.avaliacaoPeloId);
router.post("/adiciona", controller.adicionaAvaliacao);
router.patch("/atualizar/:id", controller.atualizaAvaliacao);
router.delete("/:id", controller.apagarAvaliacao);

module.exports = router
const express = require("express");
const router = express.Router();
const controller = require("../controllers/restaurantesController");

router.get("/restaurantes", controller.listaRestaurantes);
router.get("/nome", controller.buscarRestaurantePorNome);
router.get("/estado", controller.buscarRestaurantePorEstado);
router.get("/cidade", controller.buscarRestaurantePorCidade);
router.get("/rampa", controller.restaurantesComRampasDeAcesso);
router.get("/banheiros", controller.banheirosAcessiveis);
router.get("/braile", controller.restaurantesComCardapioBraile);
router.get("/libras", controller.restaurantesComInterpreteLibras);
router.get("/autista", controller.restaurantesComCardapioAutista);
router.get("/abafador", controller.restaurantesComAbafador);
router.post("/add", controller.adicionarRestaurante);
router.patch("/:id", controller.atualizarRestaurante);
router.delete("/:id", controller.apagarRestaurante);

module.exports = router;

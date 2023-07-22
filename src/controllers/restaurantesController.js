const RestauranteModel = require("../models/restaurantesModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const listaRestaurantes = async (req, res) => {
  try {
    const todosRestaurantes = await RestauranteModel.find();
    res.status(200).json(todosRestaurantes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const buscarRestaurantePorNome = async (req, res) => {
  try {
    const { nome } = req.query;
    const findNome = await RestauranteModel.find({ nome: nome });
    res.status(200).json(findNome);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const buscarRestaurantePorEstado = async (req, res) => {
  try {
    const { estado } = req.query;
    const findEstado = await RestauranteModel.find({ estado: estado });
    res.status(200).json(findEstado);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const buscarRestaurantePorCidade = async (req, res) => {
  try {
    const { cidade } = req.query;
    const findCidade = await RestauranteModel.find({ cidade: cidade });
    res.status(200).json(findCidade);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const restaurantesComRampasDeAcesso = async (req, res) => {
  try {
    const { rampasAcesso } = req.query;
    const findRampa = await RestauranteModel.find({
      rampasAcesso: rampasAcesso,
    });
    res.status(200).json(findRampa);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const banheirosAcessiveis = async (req, res) => {
  try {
    const { banheirosAcessiveis } = req.query;
    const findBanheirosAcessiveis = await RestauranteModel.find({
      banheirosAcessiveis: banheirosAcessiveis,
    });
    res.status(200).json(findBanheirosAcessiveis);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const restaurantesComCardapioBraile = async (req, res) => {
  try {
    const { cardapioBraile } = req.query;
    const findCardapio = await RestauranteModel.find({
      cardapioBraile: cardapioBraile,
    });
    res.status(200).json(findCardapio);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const restaurantesComInterpreteLibras = async (req, res) => {
  try {
    const { interpreteLibras } = req.query;
    const findLibras = await RestauranteModel.find({
      interpreteLibras: interpreteLibras,
    });
    res.status(200).json(findLibras);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const restaurantesComCardapioAutista = async (req, res) => {
  try {
    const { cardapioAutista } = req.query;
    const findCardapio = await RestauranteModel.find({
      cardapioAutista: cardapioAutista,
    });
    res.status(200).json(findCardapio);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const restaurantesComAbafador = async (req, res) => {
  try {
    const { foneAbafadorDeSons } = req.query;
    const findFone = await RestauranteModel.find({
      foneAbafadorDeSons: foneAbafadorDeSons,
    });
    res.status(200).json(findFone);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const adicionarRestaurante = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("Você esqueceu o token!");
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Acesso não autorizado");
      }
      const {
        nome,
        endereco,
        cidade,
        estado,
        contato,
        espacoKids,
        rampasAcesso,
        banheirosAcessiveis,
        cardapioBraile,
        interpreteLibras,
        cardapioAutista,
        fonesAbafadorDeSons,
        atendimentoPrioritario,
      } = req.body;

      const newRestaurante = new RestauranteModel({
        nome,
        endereco,
        cidade,
        estado,
        contato,
        espacoKids,
        rampasAcesso,
        banheirosAcessiveis,
        cardapioBraile,
        interpreteLibras,
        cardapioAutista,
        fonesAbafadorDeSons,
        atendimentoPrioritario,
      });

      const salvaRestaurante = await newRestaurante.save();
      res.status(201).json({
        message: "Novo restaurante adicionado",
        salvaRestaurante,
      });
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const atualizarRestaurante = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("Você esqueceu o token!");
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Acesso não autorizado");
      }
      const {
        nome,
        endereco,
        cidade,
        estado,
        contato,
        espacoKids,
        rampasAcesso,
        banheirosAcessiveis,
        cardapioBraile,
        interpreteLibras,
        cardapioAutista,
        fonesAbafadorDeSons,
        atendimentoPrioritario,
      } = req.body;

      const atualizarRestaurante = await RestauranteModel.findByIdAndUpdate(
        req.params.id,
        {
          nome,
          endereco,
          cidade,
          estado,
          contato,
          espacoKids,
          rampasAcesso,
          banheirosAcessiveis,
          cardapioBraile,
          interpreteLibras,
          cardapioAutista,
          fonesAbafadorDeSons,
          atendimentoPrioritario,
        }
      );

      res.status(200).json({
        message: "Restaurante atualizado com sucesso",
        atualizarRestaurante,
      });
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar" });
  }
};

const apagarRestaurante = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("Você esqueceu o token!");
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Acesso não autorizado");
      }
      const { id } = req.params;
      const deleteRestaurante = await RestauranteModel.findByIdAndDelete(id);
      const message = `Restaurante ${deleteRestaurante.nome} deletado`;
      res.status(200).json({ message });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  listaRestaurantes,
  buscarRestaurantePorNome,
  buscarRestaurantePorEstado,
  buscarRestaurantePorCidade,
  restaurantesComRampasDeAcesso,
  banheirosAcessiveis,
  restaurantesComCardapioBraile,
  restaurantesComInterpreteLibras,
  restaurantesComCardapioAutista,
  restaurantesComAbafador,
  adicionarRestaurante,
  atualizarRestaurante,
  apagarRestaurante,
};

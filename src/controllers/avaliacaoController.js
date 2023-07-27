const avaliacaoModel = require("../models/avaliacaoModel");
const restauranteModel = require("../models/restaurantesModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const avaliacoes = async (req, res) => {
  try {
    const todasAvalaciacoes = await avaliacaoModel
      .find()
      .populate("restaurante");
    res.status(200).json(todasAvalaciacoes);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const avaliacaoPeloId = async (req, res) => {
  try {
    const findAvaliacao = await avaliacaoModel
      .findById(req.params.id)
      .populate("restaurante");

    if (findAvaliacao == null) {
      // null indica que não tem um obejeto correspondente
      res.status(404).json({
        message: "Avaliação não existe",
      });
    }
    res.status(200).json(findAvaliacao);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const adicionaAvaliacao = async (req, res) => {
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
        restauranteId, 
        nomeDoRestaurante, 
        cliente,
        nota, 
        comentario 
    } = req.body;

      if (!restauranteId) {
        return res.status(400).json({
          message: "Informe o ID do restaurante.",
        });
      }

      const findRestaurante = await restauranteModel.findById(restauranteId);

      if (!findRestaurante) {
        return res.status(404).json({
          message: "Restaurante não encontrado.",
        });
      }

      const newAvaliacao = new avaliacaoModel({
        restaurante: restauranteId,
        nomeDoRestaurante,
        cliente,
        nota,
        comentario,
      });

      const salvaAvaliacao = await newAvaliacao.save();
      res.status(200).json({
        massage: "Avaliação realizada!!",
        salvaAvaliacao,
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.massage,
    });
  }
};

const atualizaAvaliacao = async (req, res) => {
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
      const { restauranteId, nomeDoRestaurante, cliente, nota, comentario } =
        req.body;

      const findAvaliacao = await avaliacaoModel.findById(id);

      if (findAvaliacao == null) {
        res.status(404).json({
          message: "Avaliação não encontrada.",
        });
      }

      if (restauranteId) {
        const findAvaliacao = await avaliacaoModel.findById(restauranteId);
        if (findAvaliacao == null) {
          return res.status(404).json({
            message: "Restaurante não encontrado",
          });
        }
      }

      findAvaliacao.nomeDoRestaurante =
        nomeDoRestaurante || findAvaliacao.nomeDoRestaurante;
      findAvaliacao.cliente = cliente || findAvaliacao.cliente;
      findAvaliacao.nota = nota || findAvaliacao.nota;
      findAvaliacao.comentario = comentario || findAvaliacao.comentario;

      const salvaAvaliacao = await findAvaliacao.save();
      res.status(200).json({
        massage: "Avaliação atualizada com sucesso!!",
        salvaAvaliacao,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const apagarAvaliacao = async (req, res) => {
    try {
        const authHeader = req.get("authorization");
        if (!authHeader) {
          return res.status(401).send("Você esqueceu de passar as informações de autorização!");
        }
    
        const token = authHeader.split(" ")[1];
    
        jwt.verify(token, SECRET, async function (erro) {
          if (erro) {
            return res.status(403).send("Acesso não autorizado");
          }
          const { id } = req.params;
          const findAvaliacao = await avaliacaoModel.findByIdAndDelete(id);
    
          if (findAvaliacao == null) {
            return res.status(404).json({ message: `A avaliação ${id} não encontrada` });
          }
    
          res.status(200).json({ message: `A avaliação com o ${id} foi deletado` });
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };

module.exports = {
  avaliacoes,
  avaliacaoPeloId,
  adicionaAvaliacao,
  atualizaAvaliacao,
  apagarAvaliacao,
};

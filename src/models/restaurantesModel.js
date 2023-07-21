const mongoose = require("mongoose");

const RestauranteSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    nome: {
      type: String,
      required: true,
      unique: true,
    },
    endereco: {
      type: String,
      required: true,
    },
    cidade: {
      type: String,
      required: true,
    },
    estado: {
      type: String,
      required: true,
    },
    contato: {
      type: Number,
      required: true,
    },
    espacoKids: {
      type: Boolean,
      required: true,
    },
    rampasAcesso: {
        type: Boolean,
      },
      banheirosAcessiveis: {
        type: Boolean,
      },
      cardapioBraile: {
        type: Boolean,
      },
      interpreteLibras: {
        type: Boolean,
      },
      cardapioAutista: {
        type: Boolean,
      },
      foneAbafadorDeSons: {
        type: Boolean,
      },
      atendimentoPrioritario: {
        type: Boolean,
      },
},
  { timestamp: true }
);

const Model = mongoose.model("Restaurante", RestauranteSchema);

module.exports = Model;
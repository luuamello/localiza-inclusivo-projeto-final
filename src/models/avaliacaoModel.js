const mongoose = require("mongoose");

const AvaliacaoSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
   nomeDoRestaurante: {
    type: String,
    required:true,
   },
    cliente: {
      type: String,
      required: true,
    },
    nota: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comentario: {
      type: String,
      maxLength: 500,
    },
    restaurante: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Restaurante",
    },
  },
  { timestamps: true }
);

const Avaliacao = mongoose.model("Avaliacao", AvaliacaoSchema);

module.exports = Avaliacao;

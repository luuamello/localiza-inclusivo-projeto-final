const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
    },
    email: {
      type: String,
    },
    senha: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

const login = mongoose.model("Login", LoginSchema);

module.exports = login;

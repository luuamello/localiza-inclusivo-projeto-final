const loginModel = require("../models/loginModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const criarUsuario = async (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 6);
  req.body.senha = senhaComHash;

  const login = new loginModel(req.body);
  try {
    const salvaLogin = await login.save();
    res.status(201).json({
      message: "Login criado com sucesso",
      salvaLogin,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const listaLogins = async (req, res) => {
  try {
    const logins = await loginModel.find({}, null);
    res.status(500).json(logins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const atualizaLogin = async (req, res) => {
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
      const { nome, email, senha } = req.body;

      const { id } = req.params;
      const buscaUsuario = await loginModel.findById(id);
      if (!buscaUsuario) {
        return res.status(404).json({ message: "Usuário não foi encontrado!" });
      }
      buscaUsuario.email = email || buscaUsuario.email;
      buscaUsuario.senha = senha || buscaUsuario.senha;
      buscaUsuario.name = nome || buscaUsuario.nome;
      const salvaLogin = await buscaUsuario.save();
      res
        .status(200)
        .json({ message: "Usuário atualizado com sucesso", salvaLogin });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const deletaPorId = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res
        .status(401)
        .send("Você esqueceu o token!");
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Acesso não autorizado");
      }
      const { id } = req.params;
      await loginModel.findByIdAndDelete(id);
      const message = `O usuário com o ${id} foi delatado com sucesso!`;
      res.status(200).json({ message });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await loginModel.findOne({ email });
    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const verificaSenha = bcrypt.compareSync(senha, usuario.senha);
    if (!verificaSenha) {
      return res.status(403).json({ message: "Senha inválida" });
    }

    const token = jwt.sign({ email }, SECRET);
    return res.status(200).json(token);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  criarUsuario,
  listaLogins,
  atualizaLogin,
  deletaPorId,
  login,
};

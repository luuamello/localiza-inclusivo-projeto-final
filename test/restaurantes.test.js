const restaurantesModel = require("../src/models/restaurantesModel");

describe("GET model test", () => {
  const restaurante = new restaurantesModel({
    nome: "Vila Bella",
    endereco: "Rua Costa Rica",
    cidade: "Natal",
    estado: "Rio Grande do Norte",
    contato: 88888888,
    espacoKids: true,
    rampasAcesso: true,
    banheirosAcessiveis: true,
    cardapioBraile: false,
    interpreteLibras: false,
    cardapioAutista: false,
    foneAbafadorDeSons: false,
    atendimentoPrioritario: true,
  });
  it("Deve chamar o schema e retornar o nome correto do restaurante", () => {
    expect(restaurante.nome).toBe("Vila Bella");
  });
  it("Deve chamar o schema e retornar o endereco correto do restaurante", () => {
    expect(restaurante.endereco).toBe("Rua Costa Rica");
  });
  it("Deve chamar o schema e retornar a cidade correta do restaurante", () => {
    expect(restaurante.cidade).toBe("Natal");
  });
  it("Deve chamar o schema e retornar o estado correto do restaurante", () => {
    expect(restaurante.estado).toBe("Rio Grande do Norte");
  });
  it("Deve chamar o schema e retornar o contato correto do restaurante", () => {
    expect(restaurante.contato).toBe(88888888);
  });
  it("Deve chamar o schema e retornar a desponibilidade do espaço kids correto do restaurante", () => {
    expect(restaurante.espacoKids).toBe(true);
  });
  it("Deve chamar o schema e retornar a desponibilidade de rampas de acesso correto do restaurante", () => {
    expect(restaurante.rampasAcesso).toBe(true);
  });
  it("Deve chamar o schema e retornar a desponibilidade de banheiros acessiveis correto do restaurante", () => {
    expect(restaurante.banheirosAcessiveis).toBe(true);
  });
  it("Deve chamar o schema e retornar a desponibilidade de cardapio braile correto do restaurante", () => {
    expect(restaurante.cardapioBraile).toBe(false);
  });
  it("Deve chamar o schema e retornar a desponibilidade de interprete de libras correto do restaurante", () => {
    expect(restaurante.interpreteLibras).toBe(false);
  });
  it("Deve chamar o schema e retornar a desponibilidade de cardapio para autistas correto do restaurante", () => {
    expect(restaurante.cardapioAutista).toBe(false);
  });
  it("Deve chamar o schema e retornar a desponibilidade de fones abafador de sons correto do restaurante", () => {
    expect(restaurante.foneAbafadorDeSons).toBe(false);
  });
  it("Deve chamar o schema e retornar a desponibilidade de atendimento prioritario correto do restaurante", () => {
    expect(restaurante.atendimentoPrioritario).toBe(true);
  });
});

describe("CREATE route test", () => {
  const restaurante = new restaurantesModel({
    nome: "Vila Bella",
    endereco: "Rua Costa Rica",
    cidade: "Natal",
    estado: "Rio Grande do Norte",
    contato: 88888888,
    espacoKids: true,
    rampasAcesso: true,
    banheirosAcessiveis: true,
    cardapioBraile: false,
    interpreteLibras: false,
    cardapioAutista: false,
    foneAbafadorDeSons: false,
    atendimentoPrioritario: true,
  });
  it("Deve salvar no banco de dados o novo restaurante", () => {
    restaurante.save().then((dados) => {
      expect(dados.nome).toBe("Vila Bella");
    });
  });
});

describe("UPDATE route test", () => {
  it("Deve editar o título e salvar no banco de dados o novo restaurante", () => {
    const restaurante = new restaurantesModel({
      nome: "Vila Bella",
      endereco: "Rua Costa Rica",
      cidade: "Natal",
      estado: "Rio Grande do Norte",
      contato: 88888888,
      espacoKids: true,
      rampasAcesso: true,
      banheirosAcessiveis: true,
      cardapioBraile: false,
      interpreteLibras: false,
      cardapioAutista: false,
      foneAbafadorDeSons: false,
      atendimentoPrioritario: true,
    });
    restaurante.nome = "novo restaurante teste";
    restaurante.save().then((dados) => {
      expect(dados.nome).toBe("novo restaurante teste");
    });
  });
});

describe("DELETE route test", () => {
  it("Deve excluir o novo restaurante", () => {
    const restaurante = new restaurantesModel({
      nome: "Vila Bella",
      endereco: "Rua Costa Rica",
      cidade: "Natal",
      estado: "Rio Grande do Norte",
      contato: 88888888,
      espacoKids: true,
      rampasAcesso: true,
      banheirosAcessiveis: true,
      cardapioBraile: false,
      interpreteLibras: false,
      cardapioAutista: false,
      foneAbafadorDeSons: false,
      atendimentoPrioritario: true,
    });
    restaurante.save().then((dados) => {
      restaurante.delete().then((novosDados) => {
        expect(dados.nome).toBe(null);
      });
    });
  });
});

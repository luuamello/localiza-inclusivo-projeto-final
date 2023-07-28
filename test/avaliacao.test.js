const avaliacaoModel = require("../src/models/avaliacaoModel");

describe("GET model test", () => {
  const avaliacao = new avaliacaoModel({
    nomeDoRestaurante: "Vila Bella",
    cliente: "Maria",
    nota: 5,
    comentario:
      "Restaurante excelente, supriu todas as minhas necessidades, super indico ele e voltarei mais vezes",
    restaurante: "64c2cfc4fc5aa7dea4e298eb",
  });
  it("Deve chamar o schema e retornar o nome do restaurante correto", () => {
    expect(avaliacao.nomeDoRestaurante).toBe("Vila Bella");
  });
  it("Deve chamar o schema e retornar o cliente correto", () => {
    expect(avaliacao.cliente).toBe("Maria");
  });
  it("Deve chamar o schema e retornar a nota correta", () => {
    expect(avaliacao.nota).toBe(5);
  });
  it("Deve chamar o schema e retornar o comentario correto", () => {
    expect(avaliacao.comentario).toBe(
      "Restaurante excelente, supriu todas as minhas necessidades, super indico ele e voltarei mais vezes"
    );
  });
  it("Deve chamar o schema e retornar o id do restaurante correto", () => {
    expect(
      JSON.stringify(avaliacao.restaurante).substring(
        1,
        JSON.stringify(avaliacao.restaurante).length - 1
      )
    ).toBe("64c2cfc4fc5aa7dea4e298eb");
  });
});

describe("CREATE route test", () => {
  const avaliacao = new avaliacaoModel({
    nomeDoRestaurante: "Vila Bella",
    cliente: "Maria",
    nota: 5,
    comentario:
      "Restaurante excelente, supriu todas as minhas necessidades, super indico ele e voltarei mais vezes",
    restaurante: "64c2cfc4fc5aa7dea4e298eb",
  });
  it("Deve salvar no banco de dados a nova adualicao", () => {
    avaliacao.save().then((dados) => {
      expect(dados.nomeDoRestaurante).toBe("Vila Bella");
    });
  });
});

describe("UPDATE route test", () => {
  it("Deve editar o cliente e salvar no banco de dados a nova atualizacao", () => {
    const avaliacao = new avaliacaoModel({
      nomeDoRestaurante: "Vila Bella",
      cliente: "Maria",
      nota: 5,
      comentario:
        "Restaurante excelente, supriu todas as minhas necessidades, super indico ele e voltarei mais vezes",
      restaurante: "64c2cfc4fc5aa7dea4e298eb",
    });
    avaliacao.cliente = "nova avaliacao teste";
    avaliacao.save().then((dados) => {
      expect(dados.cliente).toBe("nova avaliacao teste");
    });
  });
});

describe("DELETE route test", () => {
  it("Deve excluir o novo restaurante", () => {
    const avaliacao = new avaliacaoModel({
      nomeDoRestaurante: "Vila Bella",
      cliente: "Maria",
      nota: 5,
      comentario:
        "Restaurante excelente, supriu todas as minhas necessidades, super indico ele e voltarei mais vezes",
      restaurante: "64c2cfc4fc5aa7dea4e298eb",
    });
    avaliacao.save().then((dados) => {
      avaliacao.delete().then((novosDados) => {
        expect(dados.cliente).toBe(null);
      });
    });
  });
});

const { geradorDeBusinessName, contagemDoMaior, checarNacionalidade } = require("../medium");

describe('Testando os exercícios da dificuldade "medium">', () => {
    test('A função "geradorDeBusinessName" recebe um nome completo e retorna o Business name esperado', () => {
        expect(geradorDeBusinessName("Felipe Lomnitzer")).toEqual("Lomnitzer, Felipe");
        expect(geradorDeBusinessName("Victor Gouveia Sabbagh")).toEqual("Sabbagh, Victor");
        expect(geradorDeBusinessName("Wagner Matos Barbosa Junior")).toEqual("Barbosa, Wagner");
    });

    test('A função "contagemDoMaior" retorna corretamente a resposta de qual o maior numero no array e quantas vezes ele ocorre.', () => {
        expect(contagemDoMaior([1, 5, 99, 3, 43, 99, 27])).toBe("O número que mais aparece é 99, aparecendo 2 vezes.");
        expect(contagemDoMaior([1, 5, 3, 43, 27])).toBe("O número que mais aparece é 43, aparecendo 1 vezes.");
        expect(contagemDoMaior([247000,99, 5, 247000, 99, 27, 247000, 1])).toBe("O número que mais aparece é 247000, aparecendo 3 vezes.");
    });

    test('A função "checarNacionalidade" informa corretamente se a pessoa é estrangeira ou não.', () => {
        expect(checarNacionalidade({nome: "Wagner", idade: 35, nacionalidade: "brasileiro(a)"})).toBe("brasileiro(a)");
        expect(checarNacionalidade({nome: "Tatiana", idade: 37, nacionalidade: "modolvo(a)"})).toBe("estrangeiro(a)");
    });
});
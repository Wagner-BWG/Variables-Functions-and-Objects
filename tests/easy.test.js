const { cinco, hello, soma, helloNome, pontosBrasileirão, clima, entradaCadastro } = require('../easy');

describe('Testando os exercícios da dificuldade "easy">', () => {
    test('A variável chamada "cinco" vale 5.', () => {
        expect(cinco).toEqual(5);
    });

    test('a variável "hello" é a frase "Olá, tudo bem?"', () => {
        expect(hello).toBe("Olá, tudo bem?");
    });

    test('A função "soma" efetua a soma de dois numeros passados para ela.', () => {
        expect(soma(2, 3)).toEqual(5);
        expect(soma(5, 4)).toEqual(9);
    });

    test('A função "helloName" retorna uma saudação igual "hello" mas para o nome que foi fornecido', () => {
        expect(helloNome("João")).toBe("Olá João, tudo bem?");
        expect(helloNome("Natália")).toBe("Olá Natália, tudo bem?");
    });

    test('A função "pontosBrasileirão" retorna a pontuação correta de um time baseado em suas vitórias e empates', () => {
        expect(pontosBrasileirão(3, 1)).toEqual(10);
        expect(pontosBrasileirão(2, 2)).toEqual(8);
        expect(pontosBrasileirão(0, 3)).toEqual(3);
    });

    test('A função "clima" retorna uma string descrevendo o clima de acordo com hora e as condições', () => {
        expect(clima(12, true, false)).toEqual("Nublado.");
        expect(clima(23, true, true)).toEqual("Nublado com chuva.");
        expect(clima(1, false, true)).toEqual("Chuvoso.");
        expect(clima(14, false, true)).toEqual("Chuvoso.");
        expect(clima(9, false, false)).toEqual("Ensolarado.");
        expect(clima(5, false, false)).toEqual("Céu limpo.");
        expect(clima(22, false, false)).toEqual("Céu limpo.");
    })

    test('A função "entradaCadastro" retorna um objeto com os campos cadastrais corretos', () => {
        expect(entradaCadastro("Wagner", 1332000001, "wagner@email.com", false))
            .toEqual({
                nome: "Wagner",
                telefone: 1332000001,
                email: "wagner@email.com",
                receberNews: false
            });

        expect(entradaCadastro("Pessoason Pessoa da Gente", "13-35490330", "pessoa@email.com.br", true))
            .toEqual({
                nome: "Pessoason Pessoa da Gente",
                telefone: "13-35490330",
                email: "pessoa@email.com.br",
                receberNews: true
            });
    });
});

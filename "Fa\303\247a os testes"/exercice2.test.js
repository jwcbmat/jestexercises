const exercice = require("./exercice2");
import {
    expect, test, describe
} from "@jest/globals";

describe('Construa os testes do exercice2.js', () => {

    test('Calcule a soma dos números impares maiores que 10 e menores que 30', () => {
        expect(exercice.somaImpares(10, 30)).toEqual(res);
    })

    test('Calcule a soma da array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
        expect(exercice.somaArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(res);
    })

    test('Criar uma função que receba como parâmetro [-3, -2, -1, 0, 1, 2, 3] de números e retorne um array contendo somente números positivos.', () => {
        expect(exercice.somaArrayPositivo([-3, -2, -1, 0, 1, 2, 3])).toEqual(res);
    })
})
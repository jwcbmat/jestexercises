const exercicios = require("./exercice");

describe("exercicios de teste", () => {

    function interval(start, end) {
        const values = [];
        for (let i = start; i <= end; i++) {
            values.push(i);
        }
        return values;
    }

    test("Some os números de 1 a 10 e retorne o valor", () => {
        const values = interval(1, 10);
        const res = values.reduce((index, cur) => index + cur);
        expect(exercicios.Add1to10()).toEqual(res);
    })

    test("Some os números impares menores que 100", () => {
        const values = interval(1, 100);
        const res = values
            .filter((n) => n % 2 === 1)
            .reduce((index, cur) => index + cur);
        expect(exercicios.SumOfOddNumbers()).toEqual(res);
    })

    test("Calcule o fatorial de 10", () => {
        const values = interval(1, 10);
        const res = values.reduce((index, cur) => index * cur);
        expect(exercicios.FactorialOf10()).toEqual(res);
    })
})
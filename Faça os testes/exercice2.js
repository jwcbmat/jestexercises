somaImpares = (min, max) => {
    let soma = 0;
    for (let i = min; i < max; i++) {
        if (i % 2 !== 0) {
            soma += i;
        }
    }
    return soma;
}

module.exports = somaImpares

somaArray = (array) => {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

module.exports = somaArray

somaArrayPositivo = (array) => {
    let arrayPositivo = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            arrayPositivo.push(array[i]);
        }
    }
    return arrayPositivo;
}

module.exports = somaArrayPositivo


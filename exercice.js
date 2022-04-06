exports.Add1to10 = function () {
    let numberA = 0
    let numberB = 0
    for (let i = 0; i < 10; i++) {
        numberA = i + numberB
        numberB = numberA
    }
    return numberB
}

exports.SumOfOddNumbers = function () {

}
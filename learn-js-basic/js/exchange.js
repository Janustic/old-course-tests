const rates = {
    usd : 2100,
    sgd: 1490,
    eur: 2108
}
// from usdToMMk
function usdtoMMK(inputUsd){
    return (inputUsd*rates.usd)+"MMK";
}
// from MMKToAnyCurrency
function toMMk(inputAmount,fromCurrency){
    return (inputAmount*rates[fromCurrency])+"MMK";
}
// from anyCurrenyToMMK
function output(inputMMk, currency){
    return (inputMMk  /  rates[currency])+currency;

}
// from anyCurrencytoanyCurrency


function toAnyCurrency(inputAmount, fromCurrency, toCurrency){
    let mmk = inputAmount * rates[fromCurrency];
    let result = mmk/rates[toCurrency];

    return result+toCurrency;
}

// console.log(usdtoMMK(200))

// console.log(toMMk(500,"usd"))
// console.log(toMMk(500,"sgd"))

console.log(output(80000,"usd"))
console.log(output(30000,"sgd"))

console.log(toAnyCurrency(500,"sgd","usd"))
console.log(toAnyCurrency(1,"sgd","sgd"))
console.log(toAnyCurrency(50,"eur","sgd"))





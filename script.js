
let finalPrice;
const kilometraggio = prompt("inserire numero di km da perocrrere");
const age = prompt("inserire età viaggiatore");
if (age > 65) {
    finalPrice = 0.21 * kilometraggio * (0.6)
}
else if (age < 18) {
    finalPrice = 0.21 * kilometraggio * (0.8);

}
else {
    finalPrice = 0.21 * kilometraggio;
}
alert(`Il prezzo del viaggio applicando gli sconti appropriati è di: ${finalPrice.toFixed(2)}`);
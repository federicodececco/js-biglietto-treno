/* variable necessary for calculations */
let finalPrice;
/* prompt the user for infos */
const kilometraggio = prompt("inserire numero di km da perocrrere");
const age = prompt("inserire età viaggiatore");
/* ifs are necessary to apply the neccessary discounts */
if (age > 65) {
    finalPrice = 0.21 * kilometraggio * (0.6)
}
else if (age < 18) {
    finalPrice = 0.21 * kilometraggio * (0.8);

}
else {
    finalPrice = 0.21 * kilometraggio;
}
/* final alert that displays the price rounded up to the 2nd decimal */
alert(`Il prezzo del viaggio applicando gli sconti appropriati è di: ${finalPrice.toFixed(2)}`);
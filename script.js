/* variable necessary for calculations */
let finalPrice;
/* declaration of kilometraggio and age now to pass it out of while cycle */
let kilometraggio;
let age;

/* variable needed for whiel */
let flag = 0;
/* check if km is valid */
while (flag === 0) {
    kilometraggio = prompt("inserire numero di km da perocorrere");
    if (!isNaN(kilometraggio) && Number(kilometraggio) > 0) {
        flag = 1;
    }
}
flag = 0;
/* check if age is valid */
/* */
while (flag === 0) {
    age = prompt("inserire età del viaggiatore");
    if (!isNaN(age) && age > 0 && age < 117) {
        flag = 1;
    }
}
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

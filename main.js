var permutation = require('array-permutation');


function permertek(szamsor){

    var osszes = 0, jok = 0;

    for (var i=0; i<szamsor.length; i++){
        for (var j=i+1; j<szamsor.length; j++){
            osszes++;
            if (szamsor[i] < szamsor[j]) jok++;
        }
    }

    return (jok/osszes);
}


console.log('Hello Techtabor!');

var input = '1, 2, 3, 4';
var szamok = input.split(', ');

var osszesperm = permutation(szamok);
var sum = 0, darab = 0;
for (var p of osszesperm) {
    sum += permertek(p);
    darab++;
}

console.log(sum/darab);
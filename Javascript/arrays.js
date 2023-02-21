let arrayPaises = new Array("Argentina", "Brasil", "Colombia", "España");

let arrayPaises2 = ["Argentina", "Brasil", "Colombia", "España"];

//inserta al final de la lista

arrayPaises.push("Uruguay");


//inserta al inicio del array

arrayPaises2.unshift("Uruguay");

console.log(arrayPaises);
console.log(arrayPaises2);
console.log(arrayPaises[0]);

//elimina desde la posicion 1 del array hasta 2 elementos y luego agrega en esos indices los otros paises indicados (pueden ser menos de los que borre)
arrayPaises2.splice(1,2, 'Italia', 'Francia');

console.log(arrayPaises2);

let cantidadPaises = arrayPaises2.length;

console.log(`la cantidad de paises es: ${cantidadPaises}`);

//remueve el primer elemento del array

arrayPaises2.shift();

//remueve el ultimo elemento del array

arrayPaises2.pop();

//filtra los elementos del array que sean distintos a italia
let paisesFiltrados = arrayPaises2.filter(paises => paises!== 'Italia');
console.log(paisesFiltrados);

//arma un string con el array separados por coma o caracter que se especifica

console.log(arrayPaises2.join(", "));

//ordenar el array
console.log(arrayPaises2.sort());

//indicar el indice de un elemento
console.log(`El indicie de Italia es ${arrayPaises2.indexOf('Italia')}`);

//concatenar dos arrays
let nuevaLista = arrayPaises2.concat(arrayPaises);

console.log(nuevaLista);

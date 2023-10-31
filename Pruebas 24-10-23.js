/*
Crear una función que me diga si un número está entre 0 y 10  
=> utilizar un return;
*/

const isBetween0and10 = (num1) => {
    if(num1 >= 0 && num1 <= 10) {
        return true;
    } else {
        return false;
    }
}

/*LA MEJOR POR REDACCIÓN*/ 

const isBetween0and10 = (num1) => {
    return(num1 >= 0 && num1 <= 10)
}

if (isBetween0and10(1)) {
    console.log('Hola, ¡sí estoy entre el número 0 y 10!')
} else {
    console.log('Hola, ¡no estoy entre el número 0 y 10!')
}

/*
Crea una función que me diga si un parámetro es de tipo cadena de texto o número.
*/

const isType = (num1) => {
    return (typeof num1 === 'string' || typeof num1 === 'number')
}

/*
Crea una función que me diga si una cadena de texto tiene el valor 'pending'. Debe ser case insensitive, es decir,
me dirá "true" en todas las variantes mayúsculas/minúsculas de este texto: 'Pending', 'PEnding', 'PeNdIng', etc.
*/

const isEqual1 = (text1) => {
    return text1.toLowerCase() === 'pending';
} 

/*
  Crea una función que simule una compra con tarjeta de crédito. Tendrá tres parámetros: 
    - El precio del producto
    - El dinero gastado este mes
    - El límite mensual
  Si me queda dinero suficiente para comprar el producto, la función debe devolver el dinero gastado este
  mes incluyendo el precio del producto. Si no puedo comprar el producto pq el dinero no me da, debe escribir 
  en pantalla un mensaje diciendo que no se puede comprar por llegar al límite mensual.
*/

function compraTarjeta (precioProducto, dineroGastado, limiteMensual) {
    const totalGastado = precioProducto + dineroGastado;

    if (totalGastado <= limiteMensual) {
        return totalGastado;
    } 

    return ('No se puede realizar la compra por límite mensual')
    
}

/*
  Crea una función que indique si un número es par o impar.
*/

const isEvenorOdd = (num1) => {
    return num1 % 2 === 0;
}

/*
  Crea una función que indique el mayor de dos números
*/

const wichIsMore1 = (num1, num2) => {
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

/*
  Crea una función que indique el mayor de tres números
*/

const wichIsMore2 = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } 
    
    if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

/*
  Crea una función que, dados dos edades, te diga cuántos años hay entre ellas
*/
/*Por acabar*/

const wichDifferenceBetweenAges = (num1, num2) => {
    return Math.abs(num1 - num2);
}

/*
  Crea una función que categorice vehículos en función de sus características. Tendrá tres parámetros: 
    - El número de ruedas
    - El tipo de motor, debe ser gasolina, electrico o manual
    - Si tiene pedales o no

  Esta función debe devolver 'coche', 'moto', 'patinete', 'bicicleta' o 'desconocido':
  - Los coches tienen 4 ruedas, no tienen pedales y pueden ser eléctricos o de gasolina.
  - Las motos solo tienen 2 rueda, pueden ser de gasolina y no tienen pedales
  - Las bicicletas solo tienen 2 ruedas y pueden ser eléctricas o manuales y tienen pedales.
  - Los patinetes solo tienen 2 ruedas, pueden ser eléctricos o manuales y no tienen pedales pedales.
  - En cualquier otro caso devuelve desconocido.
*/


const wichVehicle = (wheel, engine, hasPedals) => {
    if (wheel === 4 && hasPedals && (engine === 'electric' || engine === 'gas')) {
        return car;
    } 
    if (wheel === 2 && hasPedals && engine === 'gas') {
        return motorbike;
    } 
    if (wheel === 2 && hasPedals && (engine === 'electric' || engine === 'manual')) {
        return Bicycle;
    } 
    if (wheel === 4 && hasPedals && (engine === 'electric' || engine === 'manual')) {
        return Skate;
    } 
    return 'desconocido';
}

/*Hacer un objeto y pasar la anterior función con ese objeto*/

const vehicle = {name: 'car', wheel: 4, engine:'electric'};
const vehicle1 = {name: 'car', wheel: 4, engine:'gas'};
const vehicle2 = {name: 'motorbike', wheel: 2, hasPedals: true, engine:"gas"};
const vehicle3 = {name: 'bicycle', wheel: 2, hasPedals: true, engine:'electric'};
const vehicle4 = {name: 'bicycle', wheel: 2, hasPedals: true, engine:'manual'};
const vehicle5 = {name: 'scooter', wheel: 2, hasPedals: false, engine:'electric'};
const vehicle6 = {name: 'scooter', wheel: 2, hasPedals: false, engine:'manual'};

const wichVehicle = () => {
    if (vehicle.wheel === 4 && vehicle.hasPedals && vehicle.engine === 'electric') {
        return vehicle.name;
    } 
    if (vehicle2.wheel === 4 && vehicle2.hasPedals && vehicle2.engine === 'gas') {
        return vehicle2.name;
    } 
    if (vehicle3.wheel === 2 && vehicle3.hasPedals && vehicle3.engine === 'gas') {
        return vehicle3.name;
    } 
    if (vehicle4.wheel === 2 && vehicle4.hasPedals && vehicle4.engine === 'electric') {
        return vehicle4.name;
    } 
    if (vehicle4.wheel === 2 && vehicle4.hasPedals && vehicle4.engine === 'manual') {
        return vehicle4.name;
    } 
    if (vehicle5.wheel === 4 && vehicle5.hasPedals && vehicle5.engine === 'electric') {
        return vehicle5.name;
    } 
    if (vehicle6.wheel === 4 && vehicle6.hasPedals && vehicle6.engine === 'electric') {
        return vehicle6.name;
    } 
    return 'desconocido';
}
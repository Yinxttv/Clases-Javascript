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

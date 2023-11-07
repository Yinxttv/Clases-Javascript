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
march 21 - june 20 spring
june 21 - sept 22 summer
sept 23 - dec 21 fall
dec 22 - march 20 winter
*/

const season = (day, month) {
    if {(month === 'March' && day >= 21) || month === 'april' || month === 'may' || (month === 'june' && day <= 20)}{
        return 'Spring';
    }
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

const wichVehicle = (vehicle) => {
    if (vehicle.wheel === wheel && vehicle.hasPedals && vehicle.engine === engine) {
        return vehicle.name;
    } 
    if (vehicle2.wheel === wheel && vehicle2.hasPedals && vehicle2.engine === engine) {
        return vehicle2.name;
    } 
    if (vehicle3.wheel === wheel && vehicle3.hasPedals && vehicle3.engine === engine) {
        return vehicle3.name;
    } 
    if (vehicle4.wheel === wheel && vehicle4.hasPedals && vehicle4.engine === engine) {
        return vehicle4.name;
    } 
    if (vehicle4.wheel === wheel && vehicle4.hasPedals && vehicle4.engine === engine) {
        return vehicle4.name;
    } 
    if (vehicle5.wheel === wheel && vehicle5.hasPedals && vehicle5.engine === engine) {
        return vehicle5.name;
    } 
    if (vehicle6.wheel === wheel && vehicle6.hasPedals && vehicle6.engine === engine) {
        return vehicle6.name;
    } 
    return 'desconocido';
}


/*Ejemplo forEach*/

const shoppingCart = [
    {product: 'Red wine', price: 20},
    { product: 'Water', price: 1}
    { product: 'Pizza carbonara', price: 10}
]

let totalPrice = 0;

shoppingCart.forEach(function {product, index} {
    totalPrice += product.price;
}
)

console.log(totalPrice); //Será 31

/*Listado de usuarios con información 
 - Crear objeto que represente un usuario:
    * Nombre
    * Correo
    * Dominio

 Listado con esos usuarios

 Función que simule que cuando des un texto salga el usuario
*/

const usuario = {
    name: 'Juan',
    email: 'juan@papa.com',
    brand: ['patata']
}

const usuario1 = {
    name: 'Manolo',
    email: 'manolo@tomate.com',
    brand: ['tomate']
}

const usuario2 = {
    email: 'maria@berengena.com',
    brand: ['berengena']
}


const usuarios = [
    usuario,
    usuario1,
    usuario2
]


const findTextInArray = (searchString) => {
    return usuarios.filter(function(user) {
        return user.name.include(searchString);
    });
}

console.log(searchUsers(''))



/*
  1. Dado el siguiente carrito de la compra, calcular el precio total y mostrarlo por pantalla con console.log
*/
const shoppingCart = [
	{ product: 'Red wine', price: 20, quantity: 1},
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 }
  { product: 'Tiramisú', price: 5.99, quantity: 2 }
]

let totalPrice = 0;

shoppingCart.forEach(function {product} {
    totalPrice += product.price * product.quantity;
});

console.log(totalPrice.toFixed(2));

/*
  2. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. A continuación filtra el array para mostrar todas las 
  tareas que están completadas y luego todas las tareas que están pendientes.
*/


const tasks = [
    {id: 1, description: 'task', completed: true},
    {id: 2, description: 'task', completed: false},
    {id: 3, description: 'task', completed: true},
];

const = completedTask = tasks.filter(function (task) {
    return task.completed;
})

const = pendingTask = tasks.filter(function (task) {
    return !task.completed;
})

/*
 3. Dado el listado de frutas que ponemos a continuación, recórrelo y crea otro array de igual longitud donde en cada elemento, aparezca el nombre de la fruta y si crece o no en un árbol.
   - Las que crecen en los árboles son las manzanas, las peras, las granadas y los plátanos.
*/

const frutas = ['manzana', 'pera', 'granada', 'platano', 'uva', 'melón', 'sandía'];

const fruits = frutas.map(function(fruta){
    const fromTree = ['manzana', 'pera', 'granada'].includes(fruta);
    return {
        name: fruta,
        fromTree
    }
})

/* 
   4. Dado el carrito de la compra del ejercicio 1, transforma ese array en otro que contenga además los impuestos. Por ejemplo, el primer elemento será:
	  { product: 'Red wine', price: 20, quantity: 1, taxes: 2 }

   Asumiremos que los impuestos son el 10% del precio total del producto.

   PD: La idea es que recorras el array original y lo transformes en otro con esa propiedad.
*/

const shoppingCart1 = [
	{ product: 'Red wine', price: 20, quantity: 1},
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 }
  { product: 'Tiramisú', price: 5.99, quantity: 2 }
]

const shoppingCartWithTaxes = shoppingCart1.map(function(item){
    return {
        ...item,
        taxes: item.price * 0.1 * item.quantity
    };
});

console.log(shoppingCartWithTaxes);

/*
   5. Dado el carrito de la compra del ejercicio 1, implementa una función que permita eliminar una unidad de producto del carrito de la compra basándose 
   en el nombre del producto. Por ejemplo, si la función se invoca con "Red wine", el array debe eliminar ese elemento de la lista porque solo hay 1, pero si se invoca con
   "Tiramisú", simplemente se restará uno a la propiedad quantity de ese elemento.
*/

const shoppingCart2 = [
    { product: 'Red wine', price: 20, quantity: 1},
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 }
  { product: 'Tiramisú', price: 5.99, quantity: 2 }
]


function removeItem(shoppingCart, productName) {
    const newShoppingCart = shoppingCart.map(function(item){
        if(item.product === productName){
            return {
                ...item,
                quantity: item.quantity - 1
            };
        }

        return item;

    });

    return newShoppingCart.filter(function());
}


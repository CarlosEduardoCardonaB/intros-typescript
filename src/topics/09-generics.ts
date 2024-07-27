export function whatsMyType<T>( argument: T ): T//Esta "T" es el tipo de dato de retorno. En este caso la <T> es un tipo de dato genérico que lo determinará el llamado que le hagamos a la función
{
    return argument;
}

let amIString = whatsMyType<string>('Hola mundo'); //Para esta directriz como es genérica la directriz <string> me genera la condición para que no mande un dato que no cumpla con el tipo de dato string. 
//Por ejemplo si tengo <string> y mando un numero el me va a marcar un error. Y asi con todos los datos del ejemplo siguiente.
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(' '), amINumber.toFixed() , amIArray.join('-'));
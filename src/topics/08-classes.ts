export class Person {
    public name: string;
    private address: string;

    //Una manera de iniciar constructor sin parámetros de entrada
    // constructor() {
    //     this.name = 'Eduardo';
    //     this.address = 'Manila';
    // }

    //Otra manera de iniciar el constructor con parámetros de entrada
    constructor(name: string, address: string =  'No address') {
        this.name = name;
        this.address = address;
    }
}

//Otra forma de crear lo mismo de arriba pero con menos líneas de código es el siguiente. Declarando la accesibilidad dentro de los argumentos del constructor
export class Person2 {

    constructor(
        public name: string, 
        private address: string = 'No address2'
    ){}
}


//Para extender una clase con herencia sencilla
// export class Hero extends Person {
//     constructor(        
//         public alterEgo: string, 
//         public age: string,
//         public realName: string
//     ){
//         super(realName, 'New York')
//     }
// }

//Con composición sobre herencia
export class Hero{

    //public person: Person;

    constructor(        
        public alterEgo: string, 
        public age: string,
        public realName: string,
        public person: Person
    ){
        //this.person = new Person(realName);
    }
}


//El llamado a la clase Person sin argumentos se hace asi: const ironman = new Person();

//con envío de parámetros en clase sencilla
// const ironman = new Person('Carlos', 'Caldas');

//Prueba de clase extendida

const tony = new Person('Tony', 'New York');
const ironman = new Hero('Ironman', '45', 'Robert Downy jr', tony);
const capitanAmerica = new Person2('Steve Rogers', 'Neira');

console.log(ironman , capitanAmerica);
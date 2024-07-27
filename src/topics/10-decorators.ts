function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
) {
    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override';
    }
}


@classDecorator
export class SuperClass {

    //@classDecorator aqui también se puede usar un decorador
    public myProperty: string = 'Abc123';

    //@classDecorator aqui también se puede usar un decorador
    print() {
        console.log('Hola mundo');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);
export interface Passanger {
    name: string;
    children?: string[];
}


const passanger1: Passanger = {
    name: 'Merengano',
}

const passanger2: Passanger = {
    name: "Pablo",
    children: ['Fulanito', 'Manuelita']
}

const printChildren = ( passanger: Passanger): number => { //Con el :number estoy indicando que siempre voy a retornar un número
    const howManyChildren = passanger.children?.length || 0; 
//Con el interrogante usamos el optional chaining. Nos indica que puede existir o no. En este caso le indicamos que si exite info en children que nos de el .lenght y si no entonces que nos arroje un 0

    console.log(passanger.name, howManyChildren);

    return howManyChildren;
}

printChildren ( passanger2 );
//printChildren ( passanger1 );
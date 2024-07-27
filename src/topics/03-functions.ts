function addNumbers(a:number, b:number):number{

    return a + b;
}


const addNumbersArrow = (a:number, b:number):string => {
    //return (a + b).toString();
    return `${a + b}`;
}

function multiply(firstnumber: number, base:number = 2, secondnumber?:number, ){
    return firstnumber * base;
}


// const result:string = addNumbers(1, 2).toString();
// const result2:string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);

// console.log({result});
// console.log({result2});
// console.log({multiplyResult});

interface Character{
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter =  (character: Character, amaunt:number) =>{
    character.hp += amaunt;

}

const strider: Character ={
    name: 'Strider',
    hp: 50,
    showHp: function (): void {
        console.log(`puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 40);

strider.showHp();

export{};
export interface Product {
    description: string;
    price: number;

}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}




//Sin desestricturacion
// function taxCalculation( options: TaxCalculationOptions ): number[] {
//     let total = 0;
//     options.products.forEach( product => {
//         total += product.price; // Esta linea haría lo mismo que esto: "total = total + product.price"        
//     })

//     return [total, total * options.tax];
// }

// const shoppingCart = [phone, tablet];
// const tax = 0.15;

// const result = taxCalculation({
//     products: shoppingCart,
//     tax, // En EMC 6 si voy a asignar a una variable otra variable con el mismo nombre solo es dejar el nombre de una variable. Esto sería lo mismo que hacer esto "tax: tax,"
// });

// console.log('Total ', result[0]);
// console.log('Tax ', result[1]);


//Con tarea de desestructuracion



export function taxCalculationDestructuring ( options: TaxCalculationOptions ): [number, number]{

    const {tax, products } = options;

    let total = 0;
    products.forEach( ({ price }) =>{
        total += price 
    })
    return [total, total * tax]

}


const shoppingCartDestructurign = [phone, tablet];
const tax = 0.15;

const [total, resultTax] = taxCalculationDestructuring({
    tax, 
    products: shoppingCartDestructurign
});

console.log('Total ', total);
console.log('Tax ', resultTax);








// Tarea desestructuracion


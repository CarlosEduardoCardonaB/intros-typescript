import {Product, taxCalculationDestructuring} from './06-function-destructurign'

const shoppingCart: Product[] = [{
    description: 'Samsung',
    price: 500
},{
    description: 'Xiaomi',
    price: 400
}];

const tax = 0.15;


const [total, taxResult] = taxCalculationDestructuring({
    tax,
    products: shoppingCart
});

console.log('Total ', total);
console.log('Tax ', taxResult);
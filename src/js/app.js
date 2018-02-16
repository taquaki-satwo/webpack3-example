import add from './modules/add';
import tax from './modules/tax';

const price1 = 400;
const price2 = 600;
const total = add(price1, price2);

const taxRate = 1.08;
const includeTax = tax(total, taxRate);

$('body').html(includeTax);

import add from './modules/add';
import tax from './modules/tax';

const price1 = 4000;
const price2 = 6000;
const total = add(price1, price2);

const taxRate = 1.08;
const includeTax = tax(total, taxRate);

$('body').html(includeTax);

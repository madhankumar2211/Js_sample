let arr = [1, 2, 3, 4, 5];
let sum = 0, product = 1;
for (let i = 0; i < arr.length; i++)
{
    sum += arr[i];
    product *= arr[i];
}
console.log(`Sum = ${sum}  Product = ${product}` )
document.write('Sum = '+ sum + '\t Product = ' + product )
    

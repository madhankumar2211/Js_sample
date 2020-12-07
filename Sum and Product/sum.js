let arr = [1, 2, 3, 4, 5];
let sum = 0, product = 1;
for (let i = 0; i < arr.length; i += 1)
{
    sum += arr[i];
    product *= arr[i];
}
console.log('Sum = '+ sum + '\t Product = ' + product )
    
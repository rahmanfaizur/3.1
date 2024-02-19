const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter(() => {
    return numbers % 2 === 0;
})
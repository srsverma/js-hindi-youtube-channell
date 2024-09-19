

const myNums =[1, 2, 3, ]
// const myTotal = myNums.reduce(function (acc,  currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//          return acc + currval 
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

// console.log(myTotal);



const shoppingCard = [
    {
        itemname: "js course",
        price:     999
    },
    {
        itemname: "python course",
        price:     2999
    },
    {
        itemname: "mobile dev course",
        price:    1999
    },
    {
        itemname: "data  science course ",
        price:     12999
    },
]

const priceTopay = shoppingCard.reduce((acc, item) => acc + item.price, 0)

console.log(priceTopay);

 
 let myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  newNums = myNumers.map( (srs) =>srs + 10 )
//  console.log(newNums);
 
  newNums = myNumers.map( (srs) =>{
    return srs + 10     // scope lagane ke baad yha bhi return keywoed
})                       // lagana padta h varna yha (undefined) dikhata h
//  console.log(newNums);
                       // filter me return nhi lagane pr
                       // empty (array) miltah

  
const newNums1 = myNumers
.map((num) =>num * 10)
.map((num) => num +1)
.filter((num) =>num >= 40 && num<+ 70)
console.log(newNums1);

 
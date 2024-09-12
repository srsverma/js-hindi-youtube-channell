
        //    Array

   const myArray = [0, 1, 2, 3, 4, 5]      
   const myHeros = ["shaktiman", "Naagraj"]

   const myArray2 = new Array(1, 2, 3, 4)
   console.log(myArray);                        // [ 0, 1, 2, 3, 4, 5 ]
   console.log(myArray[0]);                        // 0



//    *********** Array Methods ****************

myArray.push(6)
console.log(myArray);            // [0, 1, 2, 3, 4, 5, 6]

myArray.push(7)
console.log(myArray);           // [0, 1, 2, 3, 4, 5, 6, 7]

myArray.pop();
console.log(myArray);            // [0, 1, 2, 3, 4, 5, 6]

myArray.unshift(9)
console.log(myArray);    // [9, 0, 1, 2, 3, 4, 5, 6]

myArray.shift()       
console.log(myArray);     //[0, 1, 2, 3, 4, 5, 6]

console.log(myArray.includes(9));    //false

console.log(myArray.indexOf(9));     // -1
console.log(myArray.indexOf(5));     // 5 
   

const newArray = myArray.join()
console.log(myArray);          // [0,1,2,3,4,5,6]
console.log(newArray);       //  0,1,2,3,4,5,6
console.log(typeof newArray);    // string



// ***********  slice , splice***************

console.log("A ", myArray);      //  A  [0,1,2,3,4,5,6]

const myArray1 = myArray.slice(1, 3)
console.log(myArray1);              //  [1, 2]    

console.log("B", myArray);      //  B  [0,1,2,3,4,5,6]


const myArray3 = myArray.splice(1, 3);
console.log(myArray3);                // [1,2,3]

console.log("A", myArray);     // [0,4,5,6]















 
        


        
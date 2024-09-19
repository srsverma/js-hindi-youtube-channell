
// for each loop injavascript is used to iterate over arrays, 
// object, and  other iterable collection


const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item) { 
    // console.log(item);
    
})


coding.forEach( (item) => {
    // console.log(item);
    
})


function printMe(item){
    // console.log(item);
    
}
coding.forEach(printMe)


coding.forEach(  (item, index, arr) => {
    //  console.log(item,   index,   arr);
     
})




const myCoding = [    // array ke ander alg alg object h
    {
        languageName: "java",
        languageFileName: "java"

    },
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName : "py"
    }
]
myCoding.forEach( (item)=> {      // ()=> {} this is call back function
// console.log(item.languageName);

})            



// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
                   // for each loop value return nhi karta h (u)
// })
// console.log(values);         //undefined aati h







const myNum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const  newNums = myNum.filter( (num)=>  num > 4)



//  console.log(newNums);


const myNum1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const  newNums1 = myNum.filter( (num)=>  {
    num > 4
})                   // if scope {}use karnge to empty array aayega
                     // isliye {} ke saath return keyword likhna padega

//  console.log(newNums1);

const myNum2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const  newNums2 = myNum.filter( (num)=>  {
   return num > 4
})                   
                     
// console.log(newNums2);

// ye hi kaam for eah se  dono se ek hi kaam ho rha h

// const newNums3 =[]

//   myNum.forEach( (num)=> {
//     if (num > 4) {
//         newNums3.push(num)
//     }
// })
// console.log(newNums3);



// example for exercise

const Books =[
       { title: 'Book One', genre: 'Fiction', publish: 1981,
    edition: 2004 },
       { title: 'Book two', genre: 'Non-Fiction', publish: 1992,
    edition: 2008  },
       { title: 'Book three', genre: 'History', publish: 1999,
    edition: 2007 } ,
       { title: 'Book four', genre: 'Non-Fiction', publish: 1989,
    edition: 2010  },
       { title: 'Book Five', genre: 'science', publish: 2009,
    edition: 2014 },
       { title: 'Book Six', genre: 'Fiction', publish: 1987,
    edition: 2010 },
       { title: 'Book seven', genre: 'History', publish: 1986,
    edition: 1996 },
       { title: 'Book Eight', genre: 'science', publish: 2011,
    edition: 2016 },
       { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981,
    edition: 1989 } 

]
let userBook = Books.filter( (srs) => srs.genre === 'History')
// console.log(userBook);
 userBook = Books.filter( (srs) => srs.publish > 2000)
// console.log(userBook);
 userBook = Books.filter( (srs) =>{  return srs.edition < 2000})
// console.log(userBook);  // scope use kiya h to return keyword use karna padega

userBook = Books.filter( (srs) => {
   return srs.publish >= 1995 && srs.genre === "History"
})
console.log(userBook);

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
console.log(item.languageName);

})            
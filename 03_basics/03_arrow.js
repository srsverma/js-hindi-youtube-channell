const user = {
    username : "hitesh",
    price:   999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`)
        // console.log(this)

    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);



// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }
// chai()



// const chai = function( ){
//     let username = "hitesh"
//     console.log(this.username);              // undefined
// }
// chai()


// const chai = () => {
//     let username = "hitesh"
//     console.log(this);              // {}
// }
// chai()



// Arrow function 

// const addTwo = (num1, num2) => {
//     return num1 + num2

// }
// console.log(addTwo(3, 4));            // 1 tarika



// const addTwo =  (num1, num2) => num1 +num2         // 2 tarika

const addTwo =  (num1, num2) => (num1 + num2)          // 3 tarika  curly barces me rep kiya to return keyword likhana padega 
                                                      //our paranthishis() me rape kiya to nhi likhanpadega 
                                             // emplicite return
                                                      // 3 tarika  curly barces me rep kiya to return keyword likhana padega 
const addTwo =  (num1, num2) => ({username: "hitesh"})                              
console.log(addTwo(3, 4));


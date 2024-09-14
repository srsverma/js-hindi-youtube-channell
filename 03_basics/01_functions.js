function sayMyName() {
    console.log("s");
    console.log("u");
    console.log("r");
    console.log("e");
    console.log("s");
    console.log("h");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2) {
        
        //  let result = number1 + number2                // 2 tarike h
        //  return result                  // return ke baad kuch bhi print nhi hota h
         
        return number1 + number2           // ek tarika ye h 
    }
// addTwoNumbers(3, "4")
// addTwoNumbers(3, null)
// addTwoNumbers(3, 4)


const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);



function loginUserMessage(username) {
    if(username === undefined){                //if(!username) aese bhi nkr sakte h
      console.log("please enter a username");
      return
      
    }
    return `${username} just logged in`

}

// console.log(loginUserMessage("suresh"));
// console.log(loginUserMessage());                 // undefined aata h








function calculateCartprice(...num1){
    return num1
}

console.log(calculateCartprice(200, 400, 500, 2000));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject) {
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
      
}

// handleObject(user)

handleObject({
    uername: "sam",
    price: 399
})

const myNewArray = [200,400, 100, 600]

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));       // ek tarika
console.log(returnSecondValue([200, 400, 500, 1000]));


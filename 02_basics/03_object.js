// singleton  object     
// object.create





       //             object literals
   const mySym = Symbol("key1") 

  const JsUser = {
    name: "suresh",
    "fullname": "suresh kumar verma",
    [mySym] : "mykey1",                  // imp for interview
    age:  18,
    location: "jaipur",
    email:  "suresh@gmail.com",
    isLoggedIn:  false,
    LastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email);          // best tarika nhi h
// console.log(JsUser["email"]);                        // ye best tarika h
// console.log(JsUser["fullname"]);
// console.log(JsUser[mySym]);

JsUser.emal = "sresh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "suresh@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){

    console.log("Hello Js User");
    
}
JsUser.greetingTwo = function(){
    
    console.log(`Hello Js User,${this.name}`);
    
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())







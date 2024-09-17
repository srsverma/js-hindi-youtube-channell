// // if

// // const isUserloggedIn = true 
// const temperature  =  41 

// if (temperature <= 10) {
//     console.log("winter");
    
// }else {
//     console.log("summer");
    
// }
// console.log("execute");

// // <, >, <=, >=, ==, ===, !=, !==         operaters

// const score = 200 

// if (score > 100) {
//     const power = "fly"                   //yha var ka use karne per power globaly use ho jata
//     console.log(`user power: ${power}`);         //  h isliye hm var use nhi krte
    
// }
// console.log(`user power: ${power}`);
    

     //shorthand notation 

    //  const balance = 1000

    //  if (balance > 500) console.log("test"),console.log("test2");
          // this is right but not use bcs unreadable code
     
        // const balance = 1000 

        // if (balance < 500) {
        //     console.log("less than 500");
            
        // }else if (balance < 750) {
        //     console.log("less than 750");
        // }else if (balance < 900) {
        //     console.log("less than 900");
        // }else {
        //     console.log("less than 1200");
        // }
     

        const userLoggedIn = true 
        const debitCard = true
        const loggedInFromGoogle = false
        const loggedInFromEmail = true

        if (userLoggedIn && debitCard) {    // all condition true hone pr trun hoga
            console.log("Allow to buy course");  // and operater
        }

        if (loggedInFromGoogle || loggedInFromEmail ) {   // dono me se ek true hone pr
            console.log("User logged in");     // or operater
            
        }

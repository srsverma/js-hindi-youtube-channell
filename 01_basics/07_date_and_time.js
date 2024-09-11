
Date //

let myDate = new Date()
console.log(myDate);                 // 2024-09-11T10:33:14.488Z

console.log(myDate.toString());      //Wed Sep 11 2024 10:33:14 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());     // Wed Sep 11 2024

console.log(myDate.toLocaleString());     // 9/11/2024, 10:33:14 AM

console.log(typeof myDate);                  // object



myCreatedDate = new  Date(3024, 0, 24)
console.log(myCreatedDate.toDateString());   // Sat Jan 24 3024


myCreatedDate1 = new Date(3024, 0, 24, 5, 3)
console.log(myCreatedDate1.toLocaleString() );             // 1/24/3024, 5:03:00 AM


myCreatedDate2 = new Date("2024-01-14")
    console.log(myCreatedDate2.toLocaleString() );            // 1/14/2024, 12:00:00 AM

    let myTimeStamp =  Date.now()

    console.log(myTimeStamp);                 // 1726051707230

    console.log(myCreatedDate2.getTime());             //1705190400000

    console.log(Math.round(Date.now()/1000));          // 1726051939


    let newDate = new Date()
    console.log(newDate.getDate());                   // 11
    console.log(newDate.getMonth());                  // 8
    console.log(newDate.getDay());                  //  3
    console.log(newDate.getHours());                //10


    // `${newDAte.getDay()} and the time `


    
    
    
    

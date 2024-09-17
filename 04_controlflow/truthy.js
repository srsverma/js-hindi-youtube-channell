 const userEmail = "h@hitesh.ai"

 if (userEmail) {
    console.log("got user email");
    
 }else {
    console.log("Don't have user email");
    
 }

//  falsy value =>

    // false, 0, -0, Bigint 0n, null, undefined, NaN,""(empty string)


    // truthy values =>

    // "0", 'false', " "(empty but space), [],{}, function(){},  string

    
    const userId =  []          //Empty Array chek karna
    
    if (userId.length === 0) {
        console.log("Array is empty");
        
    }


     const emptyObj ={}

if (Object.keys(emptyObj).length === 0) {      // object ko empt chek karna
    console.log("object is empty" );
    
}


// false == 0 => true 

// false == "" => true        //imp for interview

// 0 ==""  => true





// nullish coalescing operator (??) : null undefined
// Example

let val1;
// val1 =5 ?? 10         =>  5 print

// val1 = null ?? 10     => 10 print

// val1 = undefined ?? 20    => 20 print

console.log(val1);



// Terniary Operater 

// condition ? true : false 
// example


const iceTeaPrice =100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



 




let a = 540
const b = 450
var c = 300 

if (true) {                    //{} => scope
    let a = 10
const b = 20
var c = 30 
// console.log("inner : ",a );

}                   // block and global scope 
    



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "suresh"

    function two() {
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);

    two()
    
}

one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    // console.log(username );
    
    
}

// console.log(username);




// *****************  interesting ******************
console.log(addone(5))

function addone(num) {
    return num + 1
}

                        // dono tarke h function ke h 
                        // niche wale me pahle exucute karne pr error deta h


console.log(addTwo(5))
const addTwo = function (num) {
    return num + 2
    
}
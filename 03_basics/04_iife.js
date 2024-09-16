// IIFO  =>     immedietely invoked  function exepresion  <=   full Form ***********

function chai() {
    console.log(`db connected`);
}

chai();                 // normal syntex for function


(function one() {                            // mamed IIFE        
    console.log(`db connected`);
    
 })();                                  //   IIFE


(()  =>  {                                  // unnamed IIFE
    console.log(`hello`);
    
})();                                 //  IIFE


((name)  =>  {
    console.log(`db connected two ,  ${name}`);
    
})(`suresh`);


(async() => {                           // async  
    console.log(`hii`);
    
  })();
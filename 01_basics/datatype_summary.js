//Primitive datatype

// 7 types :-  String, Number, Boolean, null, undefined, Symbol, BigInt


// Reference(Non Primitive) datatype

             //:- Array, Object, Functio
             
             
            
             const score = 100
             const scoreValue = 100.88
             
             const isLoggedIn = false
             const outsideTemp = null
             let userEmail

             const id = Symbol('123')
             const anatherId = Symbol('123')

             console.log(id === anatherId);


             const bigNumber =  34567876544569876n
             
             const heros = ["shaktiman", "naagraj", "doga", "Array"];
              
             let myObj = {
                name: "suresh"
               // age: 24,
             }

             const myfunction = function(){
                console.log("Hello world");
                
             }
             

             
             console.log(typeof myfunction);
             



 // ********************Memmory*********************************************
 
         //Stack memmoyNon_Primitive(primitive) , Heap memmory()

            let myYoutubename = "hiteshchoudharydotcom"

            let anathername =  myYoutubename
            anathername = "chaiaurcode"

              console.log(myYoutubename)
              console.log(anathername)


          let userOne = { 
            Email: "skverma@email.com",
            Upi :  "user@ybl"

          }    

          let userTwo = userOne

          userTwo ={
            Email : "hiteshchodhary@google.com",
            Upi : "user2@ybl"
          }

          console.log(userOne.Email);
          console.log(userTwo.Email);
          
          
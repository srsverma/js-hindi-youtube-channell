// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gamail",
    fullname: {
        userfullname:  {
            firstname: "suresh",
            lastname: "verma"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);     //object ke ander object


const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5:"a", 6: "b"}


// const obj3 = {obj1, obj2 }
// const obj3 = Object.assign( {} , obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}           // Imp latest format ye jyada use karna h
// console.log(obj3);



const users = [
    {
        id: 1,
        email:" s@gmail.com",

    },
    {
        id: 1,
        email:" s@gmail.com",

    }

]

users[1].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




// ********** API ******************** Distrcturing

const couurse = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "suresh"

}

//course.courseInstructor

const {courseInstructor: instructer} = course       //distructering object 
console.log(instructer);

// API 

{
    "name":"suresh",                    //This 
    "coursename": "js in hindi",        //is
    "price" : "free"                    //json
}



[
    {}
    {}
    {}              //   ye bhi json hi h
]













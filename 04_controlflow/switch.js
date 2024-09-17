// switch 

// switch (key) {
//     case value:
        
//         break;         // basic switch syntex

//     default:
//         break;
// }


const month = 2

switch (month) {        // jha condtion match hoti h uske baad ka sara excute 
                          //   karta h defoult ko chode ke
                          //ise rokne ke liye break ka use 
    case 1:
        console.log("january");
        
        break;
    case 2:                        // string bhi match kr sakte h
        console.log("feb");        // "march","feb"
        
        // break;
    case 3:
        console.log("march");
        
        break;
    case 4:
        console.log("april");
        
        break;

    default:
        console.log("defoult case match");
        
        break;
}
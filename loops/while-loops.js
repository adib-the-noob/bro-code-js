let username = "";

// with while loop
// while (username == "" || username == null ){
//     username = window.prompt("Enter your Name please!");
// }

// with do while
do{
    username = window.prompt("Enter yout Name")
}while(username == "" || username == null)

console.log("Hello", username);
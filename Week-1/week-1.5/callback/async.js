// function greet(){
//     console.log("hi there ");
// }

// setTimeout(greet,5000);

// setTimeout(function greet(){
//     console.log("hi there from inside a timeout")
// },10000);

function myFunction() {
    let d = new Date();
    console.log(`the date is ${d.getDate()} and time is ${d.getHours()}:${d.getMinutes()} and seconds are ${d.getSeconds()}` );
  
}
setInterval(myFunction,3000);


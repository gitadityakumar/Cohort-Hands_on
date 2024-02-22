// function myDisplayer(some) {
//    console.log(some);
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // The producing code (this may take some time)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );


// 

// function myFunction(value) {
//   console.log(value);
// }



/**
 structure of a promise hwo they should be written
let mypromise = new Promise(function(resolve , reject){
  //do some work 

  resolve();  //if successful
  reject();  //if gets any error
});

Promise.then() takes two arguments, a callback for success and another for failure.
Both are optional, so you can add a callback for success or failure only.
mypromise.then(
  function(value){},
  function(err){}
);  
 */






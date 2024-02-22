// const fs = require("fs");

// //my own async fn

// function readfileNow(){
//     return new Promise(function (resolve){
//         fs.readFile("a.txt","utf-8",function(err,data){

//             resolve(data);
//         })
//     })
// }
// //callbackk fn to call\
// function onDone(data){console.log(data);}
// readfileNow().then(onDone);

const fs = require("fs");
function readfileNow(cb){
    fs.readFile("a.txt","utf-8",function(err,data){
        cb(data);
    })
}

function onDone(data){
    console.log(data);
}
readfileNow(onDone);
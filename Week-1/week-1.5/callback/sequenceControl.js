//you could call a calculator function (myCalculator), 
// and let the calculator function call the display function (myDisplayer):

function myCalculator(a,b,myCallback){
    let sum = a+b;
    myCallback(sum);
}

function myDisplayer(some){
    console.log(some);
}

myCalculator(3,56,myDisplayer);
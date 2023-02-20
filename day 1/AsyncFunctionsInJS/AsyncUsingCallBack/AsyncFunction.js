//--JS Asynchronous behavior- uisng Callback funciton 
const myFunction = () => {
    console.log("Before Calling my Module ----->");
    //I am not gonna wait here for 5
    setTimeout(function(){
        console.log("After Calling my Module ----->");
    } ,5000);
    
}

myFunction();
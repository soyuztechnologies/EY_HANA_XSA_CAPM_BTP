// console.log("Hello Node JS by AnubhavTrainings.com");

// var x = 10; //This will create a variable x of type number
// console.log(x);
// console.log(typeof(x));

// var y = "10";
// console.log("Y is of type: " + typeof(parseInt(y)));

// var z = false;
// console.log("Z is of type " + typeof(z));



/////////Working with ARRAYS ---**

//Array is a collection of values, which is equal to itab
// () - parenthesis
// {} - braces
// [] - bracket

var aFruits = ["Apple", "Banana", "Cherry"];
console.log(aFruits);
//Counting 
console.log("My array has " + aFruits.length + " items");
//The first item is 
console.log("First Item :  " + aFruits[0]);
//Last Item of Array is
console.log("Last Item :  " + aFruits[aFruits.length - 1]);
//Append an item at End
console.log("After adding new item " + aFruits.push("PineApple"));
console.log("My array is now ---> " + aFruits);
//Insert in the middle
console.log(aFruits.splice(1,0,"Mango"));
console.log("After insert at Index 1 ---> " + aFruits);
//Remove from middle
console.log(aFruits.splice(2,1));
console.log("After Remove at Index 2 ---> " + aFruits);
//Loop over an array
for (let i = 0; i < aFruits.length; i++) {
    const element = aFruits[i];
    console.log("Item At Position " + i + " is ---> ", element);
}
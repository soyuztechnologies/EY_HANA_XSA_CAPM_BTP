///----Basics of functions - named function

var arr = ["apple","banana","cherry"];
var arr2 = ["miami","santa clara","las vegas"];

var printf = function(arrObject){
    for (let i = 0; i < arrObject.length; i++) {
        const element = arrObject[i];
        console.log(element);
    }
}

printf(arr);
printf(arr2);
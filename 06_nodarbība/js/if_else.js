const hour = new Date().getHours(); 
let greeting;

/*
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
*/
console.log(greeting);

if (hour < 18) {
    greeting = "Good";
    greeting = greeting + " day";
} else {
    greeting = "Good";
    greeting = greeting + " evening";
}

console.log(greeting);



document.getElementById("demo_if_else").innerHTML = greeting;

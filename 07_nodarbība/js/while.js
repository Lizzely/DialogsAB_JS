//console.log("Hello world!");

let text = "";
let i = 1;
while (i <= 20) {
    console.log("i: " + i);
    console.log("i%2:" + (i % 2));
    if (i % 2 == 0) {
        text += "<br>" + i;
    }
    i++;
}
document.getElementById("demo_while").innerHTML = text;


text = "";
i = 2;
while (i <= 20) {
    console.log("i: " + i);
    text += "<br>" + i; // text = text + "<br>" + i;
    i = i + 2; // i++; // i = i + 1; // i += 1;
}
document.getElementById("demo_while").innerHTML = text;

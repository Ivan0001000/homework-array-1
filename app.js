let array = [];
let arrayLength = parseInt(prompt("Enter a length of array:"));

for (let i = 0; i < arrayLength; i++) {
  let element = parseInt(prompt(`Enter an element of array number #${i + 1}`));
  array.push(element);
}

document.write("Current array: " + array.join("; ") + "<br>");

array.sort((a, b) => a - b);

document.write("Sorted array:" + array.join("; ") + "<br>");

array.splice(1, 3);

document.write("Spliced array:" + array.join("; ") + "<br>");

// Array from checked
let arr1 = [];
document.getElementById('rhythm-go').onclick = function () {
    arr1 = [];
    let inputElements = document.getElementsByClassName('note');
    for (let i = 0; i < inputElements.length; i++) {  // Use a regular loop
        if (inputElements[i].checked) {
            let value = parseInt(inputElements[i].value.trim(), 10); // Convert to number
            if (!isNaN(value)) {  // Ensure it's a valid number
                arr1.push(value);
            }
        }
    }
    console.log('variants ', arr1);
    let l1 = document.getElementById('rhLength').value;
    document.getElementById('result-rhythm').innerHTML = r1(l1);
}

function r1(len) {
    let len1 = 0; // Count length
    let arrResult = []; // Store result
    while (len1 < len) {
        let x = Math.floor(Math.random() * arr1.length);
        console.log('random', x);
        arrResult.push(arr1[x]);
        console.log('resrand', arr1[x]);
        len1 += 1 / arr1[x];
        console.log('len1 ', len1);
        if (len1 > len) {
            arrResult.pop();
            len1 -= 1 / arr1[x];
        }
    }

    // Process results: Add space before single digits and add class to every second number
    let formattedResult = arrResult.map((num, index) => {
        let formattedNum = num < 10 ? `&nbsp;${num}` : num;  // Add space before single-digit numbers
        // Add class to every second number based on index (1-based index for class)
        return (index + 1) % 2 === 0
            ? `<span class="alternate-color">${formattedNum}</span>`
            : formattedNum;  // Keep other numbers as they are
    }).join(" ");  // Join the numbers with a space

    return formattedResult;
}

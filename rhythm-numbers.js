// array from checked
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
    let len1 = 0; //count length
    let arrResult = []; //print result
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
    //create spacers
    let a = 4;
    //how many spacers
    let b = Math.abs(arrResult.length / 4) - 1;
    console.log("abs", b);
    for (let i = 0; i < b; i++) {
        arrResult.splice(a, 0, "&nbsp;");
        a += 5;
        console.log("result splicing", arrResult);
    }
    let c = arrResult.join(" ");

    return c;
}

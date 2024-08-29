// array from checked
let arr1 = [];
document.getElementById('go').onclick = function () {
    arr1 = [];
    let inputElements = document.getElementsByClassName('note');
    for (let i in inputElements) {
        if (inputElements[i].checked) {
            arr1.push(inputElements[i].value);
        }
    }
    console.log('variants ', arr1);
    let l1 = document.getElementById('length').value
    document.getElementById('result').innerHTML = r1(l1);
}

function r1(len) {
    let len1 = 0; //count length
    let arrResult = []; //print result
    while (len1 < len) {
        let x = null;
        x = Math.floor(Math.random() * (arr1.length - 1 - 0 + 1) + 0);
        console.log('random', x);
        arrResult.push(arr1[x]);
        console.log('resrand', arr1[x]);
        len1 += 1 / (arr1[x]);
        console.log('len1 ', len1);
        if (len1 > len) {
            arrResult.pop();
            len1 -= 1 / (arr1[x]);
        }
    }
    //create spacers
    let a = 4;
    //how many spacers
    let b = Math.abs(arrResult.length / 4) - 1;
    console.log("abs", b);
    for (let i = 0; i < b; i++) {
        arrResult.splice(a, 0, "|");
        a += 5;
        console.log("result splicing", arrResult);
    }
    c = arrResult.join(" ");

    return c;
}



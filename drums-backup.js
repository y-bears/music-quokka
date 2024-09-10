function drumsGen(steps1, r) {
    console.log("hello");

    // initialize array with ----
    let array1 = [];
    for (let i = 0; i < steps1; i++) {
        array1[i] = "-"
    }

    let r_pos = []; // Array to store positions of randomly placed 'O'
    let a = 0;
    for (let i = 0; i < r; i++) {
        a = Math.floor(Math.random() * ((steps1 - 1) - 0 + 1) + 0); // Generate a random position between 0 and steps1-1
        while (r_pos.includes(a)) {
            a = Math.floor(Math.random() * ((steps1 - 1) - 0 + 1) + 0);
        }
        r_pos.push(a);
    }
    for (b = 0; b < r; b++) {
        array1[(r_pos[b])] = 'O';
    }

    //    dividers
    let spl = 0 + 4;
    for (let i = 0; i < (Math.floor(array1.length / 4) - 1); i++) {
        array1.splice(spl, 0, '|');
        spl += 5;
        /*  array1.splice(4, 0, '|');
         array1.splice(9, 0, '|');
         array1.splice(14, 0, '|');
         array1.splice(19, 0, '|'); */
    }

    for (let c in array1) {
        document.getElementById('kick_out').innerHTML += array1[c];
    }
    console.log("end")
}

// get steps from radio buttons
function getSteps() {
    console.log("radioButtons start");
    let radioButtons = document.getElementsByName('selectedValue');
    console.log(radioButtons);
    let selectedValue = "";

    for (let i = 0; i < 2; i++) {
        if (radioButtons[i].checked) {
            selectedValue = radioButtons[i].value;
            break;
        }
    }
    console.log(selectedValue);
    return selectedValue;

}


document.getElementById('kick_btn').onclick = function () {
    console.log("go");
    document.getElementById('kick_out').innerHTML = '';
    console.log("reset");
    let steps1 = getSteps();
    console.log(steps1);
    let rmin = Number(document.getElementById('kick_inpmin').value);
    let rmax = Number(document.getElementById('kick_inpmax').value);
    if (rmax >= steps1) {
        rmax = steps1 - 1;
        let numberInput = document.getElementById('kick_inpmax');
        // Set a new value for the input
        numberInput.value = rmax;
    }
    let r = (Math.floor(Math.random() * (rmax - rmin + 1) + rmin));
    console.log(rmin, rmax, r);
    drumsGen(steps1, r);
}

// randomizing min and max
document.getElementById('kick_btn_r').onclick = function () {
    let steps1 = getSteps();
    let rminr = (Math.floor(Math.random() * ((steps1 / 2) - 0 + 1) + 0));
    console.log('rminr ', rminr);
    document.getElementById('kick_inpmin').value = Number(rminr);
    let rmaxr = (Math.floor(Math.random() * (steps1 - rminr + 1) + rminr));
    console.log('rmaxr ', rmaxr);
    document.getElementById('kick_inpmax').value = Number(rmaxr);

}
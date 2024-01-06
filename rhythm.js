//select custom when I move slider
const customRestInput = document.getElementById('customRest');
const customChanceRadio = document.querySelector('input[name="restType"][value="3"]');
customRestInput.addEventListener('input', function() {
    // Check the radio button with value 3 when the slider value changes
    customChanceRadio.checked = true;
  });

document.getElementById('rhythmButton').addEventListener('click', function() {

    
    //check
    console.log("button clicked");
    // get bars count
    const barsCount = parseInt(document.getElementById('bars').value);
    //console.log("bubars", barsCount);
    // Get all checkboxes
    let checkboxes = document.getElementsByName('checkbox');
    // Initialize an array to store checked values
    let checkedValues = [];

    // Iterate through checkboxes and add checked values to the array
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
        checkedValues.push(parseInt(checkboxes[i].value));
        }
    }

    // Find the largest checked value
    let largestCheckedValue = Math.max(...checkedValues);

    //get rests chances
    let restLimit = 15;
    const radioButtons = document.getElementsByName('restType');
    let cr;
    
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            cr = radioButtons[i].value;
            break;
        }
    }
    if (cr == '3') {
        restLimit = customRestInput.value;
    } else if (cr == '0') {
        restLimit = 0;
    } else if (cr == '2') {
        restLimit = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
    };
    console.log("rest", restLimit);
    
  

    document.getElementById('rh2').innerHTML = '';
    console.log("clear rh2");
     // Create bars with squares dynamically
     for (let i = 0; i < barsCount; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        let prev = 0; //track previous
        let isRest = 0;
        //testing
        //let counter = 1;

        let savedNote = checkedValues[Math.floor(Math.random() * checkedValues.length)];
    
        for (let j = 0, paint = 0; j < largestCheckedValue; j++, paint++) {
            const square = document.createElement('div');
            square.className = 'square';
    
            // margin for every 4th
            if ((j + 1) % 4 === 0) {
                square.style.marginRight = '20px';
            }
    
            // Randomly choose a number from the checked values
            const chosenNumber = checkedValues[Math.floor(Math.random() * checkedValues.length)];
            //console.log("chosen note", chosenNumber, "paint", paint);
            const restChance = Math.floor(Math.random() * 100) + 1;
            
            if (paint >= (largestCheckedValue / savedNote)) {
                paint = 0;
                savedNote = chosenNumber;
                //counter += 1;
            }
            if (paint === 0) {
                console.log("note", savedNote);
                if (restChance <= restLimit) {
                    square.innerText = 'r';
                    isRest = 1;
                } else {
                    square.className = 'square';
                    square.classList.add('painted1');
                    //square.innerText = counter;
                    isRest = 0;
                }
            } else {
                square.className = 'square';
                if (isRest === 1) {
                    square.innerText = 'r';
                }
            }

            
            row.appendChild(square);
        }
    
        document.getElementById('rh2').appendChild(row);
        console.log("end row");
    }
    
});
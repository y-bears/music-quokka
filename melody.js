// chose step function
function choseStep(steps, weights) {

    // Calculate the total weight
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
    console.log("820", totalWeight);
    // Generate a random number between 0 and the total weight
    const randomNum = Math.random() * totalWeight;
    console.log(randomNum);

    // Iterate through the items and subtract their weights from randomNum
    let currentWeight = 0;
    for (let i = 0; i < steps.length; i++) {
        currentWeight += weights[i];
        if (randomNum < currentWeight) {
            console.log("chosen step", steps[i])
            return steps[i];

        }
    }
}

// steps and weights
const steps = [1, 2, 3, 4, 5, 6, 7, 8, -1, -2, -3, -4, -5, -6, -7, -8, 0];
const weights = [100, 90, 85, 35, 35, 15, 15, 15, 100, 90, 85, 35, 35, 15, 15, 15, 40];
//melody array

//start
document.getElementById('go').onclick = function () {
    let melody = [];
    //first note  = note of a chord 1st 2nd 3rd
    const chordCheck = document.getElementById("chord");
    let length = document.getElementById('length').value;
    document.getElementById('firstNote').innerHTML = "";
    if (chordCheck.checked) {
        const firstNoteList = ["1st", "2nd", "3rd"];
        firstNote = firstNoteList[Math.floor(Math.random() * ((firstNoteList.length - 1) - 0 + 1) + 0)];
        length -= 1;
        document.getElementById('firstNote').innerHTML = firstNote;
    }

    for (let i = 0; i < length; i++) {
        melody[i] = choseStep(steps, weights);
    }

    let result = melody.map((n, index) => {
        let colorStyle = index % 2 === 1 ? "color: yellow;" : "color: white;";
        return `<span style="${colorStyle}">&nbsp;${n}</span>`;
    }).join("&nbsp;");

    document.getElementById('result').innerHTML = result;
}








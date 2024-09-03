const scales = ["C", "C# / Db", "D", "D# / Eb", "E", "F", "F# / Gb", "G", "G# / Ab", "A", "A# / Bb", "B"];
const modes = ["major", "minor"];
const allNotes = ["C", "C# / Db", "D", "D# / Eb", "E", "F", "F# / Gb", "G", "G# / Ab", "A", "A# / Bb", "B", "C", "C# / Db", "D", "D# / Eb", "E", "F", "F# / Gb", "G", "G# / Ab", "A", "A# / Bb", "B"];

// Function to get a random element from an array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to handle the button click
function generateScaleAndMode() {
    // Select a random scale and mode
    const selectedScale = getRandomElement(scales);
    const selectedMode = getRandomElement(modes);
    let relativeMode = "";
    let relativeScale = "";

    //relative scale + mode
    if (selectedMode === "major") {
        relativeMode = "minor"; // for minor from major +9
        relativeScale = allNotes[allNotes.indexOf(selectedScale) + 9];
    }
    else {
        relativeMode = "major"; // maj from min +3
        relativeScale = allNotes[allNotes.indexOf(selectedScale) + 3];
    }

    // Construct the result string
    const resultString = `${selectedScale} ${selectedMode} <br> ${relativeScale} ${relativeMode}`;

    // Display the result in the label with id 'scaleRes'
    document.getElementById('scaleRes').innerHTML = resultString;

    // Update the select element to match the generated scale and mode
    const selectElement = document.getElementById('scaleSelect');
    const optionValue = `${selectedScale} ${selectedMode}`;

    for (let option of selectElement.options) {
        if (option.text === optionValue) {
            option.selected = true;
            break;
        }
    }
}

// Add event listener to the "Go!" button
document.getElementById('scalesgo').addEventListener('click', generateScaleAndMode);
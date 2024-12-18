document.getElementById("drums_btn").addEventListener("click", generateAllDrums);
document.getElementById("hi-hat_btn").addEventListener("click", () => generateDrumPattern('hi-hat-out'));
document.getElementById("snare_btn").addEventListener("click", () => generateDrumPattern('snare-out'));
document.getElementById("kick_btn").addEventListener("click", () => generateDrumPattern('kick_out'));


function generateAllDrums() {
    generateDrumPattern('hi-hat-out');  // Generate for hi-hat
    generateDrumPattern('snare-out');   // Generate for snare
    generateDrumPattern('kick_out');    // Generate for kick
}

function generateDrumPattern(drumType) {
    console.log('Generating pattern for:', drumType); // Debugging log

    const steps = document.querySelector('input[name="drumSteps"]:checked').value;
    const density = document.querySelector('input[name="drum-density"]:checked').value;
    const itemsCount = parseInt(steps, 10);

    let numO;
    let minO, maxO;

    // Set range of "O" based on drum type and density
    switch (density) {
        case 'hi-density':
            [minO, maxO] = getDensityRange(drumType, 'high', itemsCount);
            break;
        case 'med-density':
            [minO, maxO] = getDensityRange(drumType, 'medium', itemsCount);
            break;
        case 'low-density':
            [minO, maxO] = getDensityRange(drumType, 'low', itemsCount);
            break;
        case 'rand-density':
            [minO, maxO] = [0, itemsCount]; // Fully random
            break;
    }

    numO = getRandomInt(minO, maxO + 1);
    let pattern = generatePattern(numO, itemsCount, drumType);

    // Insert separators
    const formattedPattern = formatPattern(pattern, itemsCount);

    // Display the pattern in the corresponding label
    document.getElementById(drumType).textContent = formattedPattern;
}


function getDensityRange(drumType, density, steps) {
    const is16 = steps === 16;
    const ranges = {
        'kick_out': {
            low: [1, 3],
            medium: [2, 5],
            high: [2, 8]
        },
        'snare-out': {
            low: [1, 2],
            medium: [1, 4],
            high: [2, 5]
        },
        'hi-hat-out': {
            low: [2, 4],
            medium: [4, 7],
            high: [5, 8]
        }
    };

    let [minO, maxO] = ranges[drumType][density];
    if (is16) {
        // Double the range for 16 steps
        maxO = Math.round(maxO * 1.7);
    }

    return [minO, maxO];
}

function generatePattern(numO, steps, drumType) {
    let pattern = new Array(steps).fill("-");
    let addedOs = 0;

    while (addedOs < numO) {
        const index = getWeightedRandomIndex(steps, drumType);
        if (pattern[index] === "-") {
            pattern[index] = "O";
            addedOs++;
        }
    }

    return pattern;
}


function getWeightedRandomIndex(steps, drumType) {
    // Define weights for each drum type
    const weights = {
        'kick_out': steps === 8 ? [30, 1, 1, 1, 20, 1, 1, 1] : [300, 1, 10, 1, 10, 1, 10, 1, 200, 1, 10, 1, 10, 1, 10, 1],
        'snare-out': steps === 8 ? [1, 1, 5, 1, 1, 1, 5, 1] : [10, 1, 10, 1, 50, 1, 10, 1, 10, 1, 10, 1, 50, 1, 10, 1],
        'hi-hat-out': steps === 8 ? [20, 10, 10, 10, 20, 10, 10, 10] : [40, 1, 20, 1, 20, 1, 20, 1, 40, 1, 20, 1, 20, 1, 20, 1]
    };

    // Debugging log
    console.log('Drum Type:', drumType);

    const drumWeights = weights[drumType];

    if (!Array.isArray(drumWeights)) {
        throw new Error(`Weights for ${drumType} are not defined properly.`);
    }

    console.log('Drum Weights:', drumWeights);

    let cumulativeWeights = [];
    let sum = 0;

    for (let weight of drumWeights) {
        sum += weight;
        cumulativeWeights.push(sum);
    }

    let random = Math.random() * sum;

    return cumulativeWeights.findIndex(cumulativeWeight => random < cumulativeWeight);
}




function formatPattern(pattern, steps) {
    let formatted = '';
    for (let i = 0; i < steps; i++) {
        if (i > 0 && i % 4 === 0) {
            formatted += '|';
        }
        formatted += pattern[i];
    }
    return formatted;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

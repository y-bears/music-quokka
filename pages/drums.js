document.getElementById("drums_btn").addEventListener("click", generateAllDrums);
document.getElementById("hi-hat_btn").addEventListener("click", () => generateDrumPattern('hi-hat-out'));
document.getElementById("snare_btn").addEventListener("click", () => generateDrumPattern('snare-out'));
document.getElementById("kick_btn").addEventListener("click", () => generateDrumPattern('kick_out'));

function generateAllDrums() {
    generateDrumPattern('hi-hat-out');
    generateDrumPattern('snare-out');
    generateDrumPattern('kick_out');
}

function generateDrumPattern(drumType) {
    console.log('Generating pattern for:', drumType);

    const steps = parseInt(document.querySelector('input[name="drumSteps"]:checked').value, 10);
    const density = document.querySelector('input[name="drum-density"]:checked').value;

    // Get density number
    const numO = getDensity(drumType, density, steps);

    console.log(`Drum Type: ${drumType}, Steps: ${steps}, Density: ${density}, numO: ${numO}`);

    let pattern = generatePattern(numO, steps, drumType);

    // Insert separators
    const formattedPattern = formatPattern(pattern, steps);

    // Display the pattern in the corresponding label
    document.getElementById(drumType).textContent = formattedPattern;
}

function getDensity(drumType, density, steps) {
    const densityMapping = {
        "hi-density": "high",
        "med-density": "medium",
        "low-density": "low",
        "rand-density": "random"
    };

    let mappedDensity = densityMapping[density];
    if (!mappedDensity) {
        console.error(`Invalid density value: ${density}`);
        return 0;
    }

    const is16 = steps === 16;
    const arrays = {
        'kick_out': {
            low: [0, 1, 1, 2],
            medium: [1, 2, 3, 3, 4],
            high: [3, 4, 4, 5, 5, 6, 7, 8]
        },
        'snare-out': {
            low: [0, 0, 1, 1, 1, 2],
            medium: [1, 1, 2, 2, 3],
            high: [2, 3, 3, 4, 5]
        },
        'hi-hat-out': {
            low: [1, 2, 2, 3],
            medium: [3, 4, 4, 5, 6],
            high: [5, 6, 6, 7, 8, 8]
        }
    };

    // Handle rand-density
    if (mappedDensity === "random") {
        const densities = ["low", "medium", "high"];
        mappedDensity = densities[Math.floor(Math.random() * densities.length)];
        console.log(`Randomly selected density: ${mappedDensity}`);
    }

    if (!arrays[drumType] || !arrays[drumType][mappedDensity]) {
        console.error(`Invalid drumType (${drumType}) or density (${mappedDensity})`);
        return 0;
    }

    let resultDensity = arrays[drumType][mappedDensity];
    let selectedDensity = resultDensity[Math.floor(Math.random() * resultDensity.length)];

    if (is16) {
        selectedDensity = Math.round(selectedDensity * 1.7);
    }

    console.log(`Selected density for ${drumType}, ${density}, ${steps} steps: ${selectedDensity}`);
    return selectedDensity;
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
    const weights = {
        'kick_out': steps === 8 ? [30, 1, 1, 1, 20, 1, 1, 1] : [300, 1, 10, 1, 10, 1, 10, 1, 200, 1, 10, 1, 10, 1, 10, 1],
        'snare-out': steps === 8 ? [1, 1, 5, 1, 1, 1, 5, 1] : [10, 1, 10, 1, 50, 1, 10, 1, 10, 1, 10, 1, 50, 1, 10, 1],
        'hi-hat-out': steps === 8 ? [20, 10, 10, 10, 20, 10, 10, 10] : [40, 1, 20, 1, 20, 1, 20, 1, 40, 1, 20, 1, 20, 1, 20, 1]
    };

    const drumWeights = weights[drumType];
    if (!Array.isArray(drumWeights)) {
        throw new Error(`Invalid weights for drumType: ${drumType}`);
    }

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

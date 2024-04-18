var scales = {
    'C major': ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
    'C# major': ['C#', 'D#m', 'E#m', 'F#', 'G#', 'A#m', 'B#dim'],
    'Db major': ['Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm', 'Cdim'],
    'D major': ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'],
    'Eb major': ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm', 'Ddim'],
    'E major': ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
    'F major': ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim'],
    'F# major': ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'E#dim'],
    'Gb major': ['Gb', 'Abm', 'Bbm', 'Cb', 'Db', 'Ebm', 'Fdim'],
    'G major': ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim'],
    'Ab major': ['Ab', 'Bbm', 'Cm', 'Db', 'Ebm', 'Fm', 'Gdim'],
    'A major': ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'],
    'Bb major': ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'Adim'],
    'B major': ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim'],
    'A minor': ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G'],
    'A# minor': ['A#m', 'B#dim', 'C#', 'D#m', 'E#m', 'F#', 'G#'],
    'Bb minor': ['Bbm', 'Cdim', 'Db', 'Ebm', 'Fm', 'Gb', 'Ab'],
    'B minor': ['Bm', 'C#dim', 'D', 'Em', 'F#m', 'G', 'A'],
    'C minor': ['Cm', 'Ddim', 'Eb', 'Fm', 'Gm', 'Ab', 'Bb'],
    'C# minor': ['C#m', 'Ddim', 'E', 'F#m', 'G#m', 'A', 'B'],
    'D minor': ['Dm', 'Edim', 'F', 'Gm', 'Am', 'Bb', 'C'],
    'D# minor': ['D#m', 'E#dim', 'F#', 'G#m', 'A#m', 'B', 'C#'],
    'Eb minor': ['Ebm', 'Fdim', 'Gb', 'Abm', 'Bbm', 'Cb', 'Db'],
    'E minor': ['Em', 'F#dim', 'G', 'Am', 'Bm', 'C', 'D'],
    'F minor': ['Fm', 'Gdim', 'Ab', 'Bbm', 'Cm', 'Db', 'Ebm'],
    'F# minor': ['F#m', 'G#dim', 'A', 'Bm', 'C#m', 'D', 'E'],
    'G minor': ['Gm', 'Adim', 'Bb', 'Cm', 'Dm', 'Eb', 'F'],
    'G# minor': ['G#m', 'A#dim', 'B', 'C#', 'D#', 'E', 'F#']
};

//ch_num = input('How many chords or [r]andom: ')

function chord(selectedScale) {
    let ch, ch_alter, ch_alter2;
    // removing *dim from major
    if (selectedScale.includes('major')) {
        let useSeven = Math.random() < 0.05; // Adjust the probability as needed 5%
        console.log("seven", useSeven);
        if (useSeven) {
            ch = 7;
        } else {
            ch = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
            console.log("ch = ", ch);
        }
        ch_alter = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        while (ch_alter == ch) {
            ch_alter = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        }
        console.log("ch alter = ", ch_alter);
        ch_alter2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        console.log(ch_alter2);
        while (ch_alter2 == ch || ch_alter2 == ch_alter) {
            ch_alter2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
            }
        console.log("ch alter 2", ch_alter2);
    } else {
    //removing 2 from minor
        let useTwo = Math.random() < 0.05; // Adjust the probability as needed 5%
        console.log("usetwo = ", useTwo);
        if (useTwo) {
            ch = 2;
            console.log("ch = ", ch);
        } else {
            ch = Math.floor(Math.random() * 7) + 1; // Random number between 1 and 7
            console.log("ch = ", ch);
            while (ch == 2) {
                ch = Math.floor(Math.random() * (7 - 1 + 1) + 1);
            }
            console.log("ch = ", ch);
        }
        ch_alter = Math.floor(Math.random() * (7 - 1 + 1) + 1);
        while (ch_alter == ch || ch_alter == 2) {
            ch_alter = Math.floor(Math.random() * (7 - 1 + 1) + 1);
        }
        console.log("ch alter = ", ch_alter);
        ch_alter2 = Math.floor(Math.random() * (7 - 1 + 1) + 1);
        
        while (ch_alter2 == ch || ch_alter2 == ch_alter || ch_alter2 == 2) {
            ch_alter2 = Math.floor(Math.random() * (7 - 1 + 1) + 1);
            
        }
        console.log("ch alter 2 = ", ch_alter2);
    };

    let seventh = Math.floor(Math.random() * (100 - 0 + 1) + 1);
    if (seventh < 100) {seventh = '\u00A0' + seventh};
    if (seventh < 10) {seventh = '\u00A0' + seventh};
    let additional = Math.floor(Math.random() * (100 - 0 + 1) + 1);
    if (additional < 100) {additional = '\u00A0' + additional};
    if (additional < 10) {additional = '\u00A0' + additional};
    let additional2 = Math.floor(Math.random() * (100 - 0 + 1) + 1);
    if (additional2 < 100) {additional2 = '\u00A0' + additional2};
    if (additional2 < 10) {additional2 = '\u00A0' + additional2};
    return { ch, ch_alter, ch_alter2, seventh, additional, additional2 };
}

function notesAndInversion() {
    const inv_list = ['root', '3rd', '5th'];
    let inv = inv_list[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
    let notes_c = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    return {inv, notes_c};
}

function getChords(ch_num, selectedScale) {
    // Clear the existing content before adding new chords
    let resultElement = document.getElementById('resultCh');
    resultElement.innerHTML = '';
    let { inv, notes_c } = notesAndInversion();
    let scale = scales[selectedScale];
    console.log("scale = ", scale)
    let resultHTML = `inversion = ${inv}, notes = ${notes_c}<br><br>`; // Build the HTML string outside the loop

    // Find the maximum chord name length in the current scale
    const maxChordLength = 5; // Set the desired length (5 symbols)

    for (let i = 0; i < ch_num; i++) {
        let { ch, ch_alter, ch_alter2, seventh, additional, additional2 } = chord(selectedScale);
       
        // Modify chord names to ensure a length of 5 symbols
        // Update the chordHTML line in your code
        let chordHTML = `[${ch}][ <span class="white-bold">${scale[ch - 1].padEnd(maxChordLength, '\u00A0')}</span> ] %7\u00A0=${seventh}, (alt\u00A0${ch_alter}\u00A0${scale[ch_alter - 1].padEnd(maxChordLength, '\u00A0')}\u00A0${ch_alter2}\u00A0${scale[ch_alter2 - 1].padEnd(maxChordLength, '\u00A0')}), (add\u00A0${additional},\u00A0${additional2})`;

        // Append the chord HTML to the resultHTML string
        resultHTML += chordHTML + '<br>';
        //resultHTML += chordHTML.replace(/ /g, '&nbsp;') + '<br>';

    }

    // String to store chords in the selected key
    let selectedKeyChords = '';

    for (let i = 0; i < scale.length; i++) {
      selectedKeyChords += `[${i + 1} <span style="font-weight: bold; color: purple;">${scale[i]}</span>] `;
    }

    // Append the selected key chords to the resultHTML string
    resultHTML +='<br><br>' + selectedKeyChords;

    // Set the resultHTML string to the result element once, outside the loop
    resultElement.innerHTML = resultHTML;
}


function rhythm() {
    let meas = [0.5, 1, 1];
    //first chord will be 1 bar always
    let rhythm = [1];
    let a = 0;
    let i = 1;
    while (a < 3) {
        rhythm[i] = meas[Math.floor(Math.random() * (2 - 0 + 1) + 0)];

        a += rhythm[i];
        if (a > 3) {
            rhythm[i] = rhythm[i] - (a - 3);

        };
        //console.log(rhythm[i], i);
        i++;

    }

    return [rhythm, i];
}

document.getElementById('randButton').onclick = function () {
    console.clear();
    // 2-8
    let ch_num = Math.floor(Math.random() * (8 - 2 + 1) + 2);
    document.getElementById('num').value = ch_num;
    // clear result from rhythm button
    document.getElementById('resultRh').innerHTML = '';
    let selectedScale = document.getElementById('scaleSelect').value;
    getChords(ch_num, selectedScale);

}

document.getElementById('numButton').onclick = () => {
    console.clear();
    let ch_num = document.getElementById('num').value;
    let selectedScale = document.getElementById('scaleSelect').value;
    getChords(ch_num, selectedScale);
    
}

document.getElementById('rh').onclick = function () {
    // 2-6
    console.clear();
    // get return
    let funcRet = rhythm();
    document.getElementById('resultRh').innerHTML = funcRet[0].join(', ');
    let ch_num = funcRet[1];
    // save number of chords ion input field to reuse in go button
    document.getElementById('num').value = ch_num;
    let selectedScale = document.getElementById('scaleSelect').value;
    getChords(ch_num, selectedScale);
    
}

document.addEventListener("DOMContentLoaded", function () {
    var infoText = document.getElementById('infoText');
    infoText.style.display = 'none';

    var infoButton = document.getElementById('infoButton');
    infoButton.addEventListener('click', function () {
      if (infoText.style.display === 'none') {
        infoText.style.display = 'block';
        infoButton.textContent = 'Hide Info';
      } else {
        infoText.style.display = 'none';
        infoButton.textContent = 'Show Info';
      }
    });
  });

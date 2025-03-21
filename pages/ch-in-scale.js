// Define available scales and their chords
/*const scales = {
  'C major': ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
  'C# major': ['C#', 'D#m', 'Fm', 'F#', 'G#', 'A#m', 'Cdim'],
  'Db major': ['Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm', 'Cdim'],
  'D major': ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'],
  'D# major': ['D#', 'Fm', 'Gm', 'G#', 'A#', 'Cm', 'Ddim'],
  'Eb major': ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm', 'Ddim'],
  'E major': ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
  'F major': ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim'],
  'F# major': ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'Fdim'],
  'Gb major': ['Gb', 'Abm', 'Bbm', 'B', 'Db', 'Ebm', 'Fdim'],
  'G major': ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim'],
  'G# major': ['G#', 'A#m', 'Cm', 'C#', 'D#', 'Fm', 'Gdim'],
  'Ab major': ['Ab', 'Bbm', 'Cm', 'Db', 'Eb', 'Fm', 'Gdim'],
  'A major': ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'],
  'A# major': ['A#', 'Cm', 'Dm', 'D#', 'F', 'Gm', 'Adim'],
  'Bb major': ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'Adim'],
  'B major': ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim'],
  'A minor': ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G'],
  'A# minor': ['A#m', 'Cdim', 'C#', 'D#m', 'Fm', 'F#', 'G#'],
  'Bb minor': ['Bbm', 'Cdim', 'Db', 'Ebm', 'Fm', 'Gb', 'Ab'],
  'B minor': ['Bm', 'C#dim', 'D', 'Em', 'F#m', 'G', 'A'],
  'C minor': ['Cm', 'Ddim', 'Eb', 'Fm', 'Gm', 'Ab', 'Bb'],
  'C# minor': ['C#m', 'D#dim', 'E', 'F#m', 'G#m', 'A', 'B'],
  'Db minor': ['Dbm', 'Ebdim', 'E', 'Gbm', 'Abm', 'A', 'B'],
  'D minor': ['Dm', 'Edim', 'F', 'Gm', 'Am', 'Bb', 'C'],
  'D# minor': ['D#m', 'Fdim', 'F#', 'G#m', 'A#m', 'B', 'C#'],
  'Eb minor': ['Ebm', 'Fdim', 'Gb', 'Abm', 'Bbm', 'B', 'Db'],
  'E minor': ['Em', 'F#dim', 'G', 'Am', 'Bm', 'C', 'D'],
  'F minor': ['Fm', 'Gdim', 'Ab', 'Bbm', 'Cm', 'Db', 'Eb'],
  'F# minor': ['F#m', 'G#dim', 'A', 'Bm', 'C#m', 'D', 'E'],
  'Gb minor': ['Gbm', 'Abdim', 'A', 'Bm', 'Dbm', 'D', 'E'],
  'G minor': ['Gm', 'Adim', 'Bb', 'Cm', 'Dm', 'Eb', 'F'],
  'G# minor': ['G#m', 'A#dim', 'B', 'C#m', 'D#m', 'E', 'F#'],
  'Ab minor': ['Abm', 'Bbdim', 'B', 'Dbm', 'Ebm', 'E', 'Gb']
};*/

//modified scales for this app
const scales = {
  'C major': ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
  'C# major': ['C#', 'D#m', 'Fm', 'F#', 'G#', 'A#m', 'Cdim'],
  'D major': ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'],
  'D# major': ['D#', 'Fm', 'Gm', 'G#', 'A#', 'Cm', 'Ddim'],
  'E major': ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
  'F major': ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim'],
  'F# major': ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'Fdim'],
  'G major': ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim'],
  'G# major': ['G#', 'A#m', 'Cm', 'C#', 'D#', 'Fm', 'Gdim'],
  'A major': ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'],
  'A# major': ['A#', 'Cm', 'Dm', 'D#', 'F', 'Gm', 'Adim'],
  'B major': ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim'],
  'A minor': ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G'],
  'A# minor': ['A#m', 'Cdim', 'C#', 'D#m', 'Fm', 'F#', 'G#'],
  'B minor': ['Bm', 'C#dim', 'D', 'Em', 'F#m', 'G', 'A'],
  'C minor': ['Cm', 'Ddim', 'Eb', 'Fm', 'Gm', 'Ab', 'Bb'],
  'C# minor': ['C#m', 'D#dim', 'E', 'F#m', 'G#m', 'A', 'B'],
  'D minor': ['Dm', 'Edim', 'F', 'Gm', 'Am', 'Bb', 'C'],
  'D# minor': ['D#m', 'Fdim', 'F#', 'G#m', 'A#m', 'B', 'C#'],
  'E minor': ['Em', 'F#dim', 'G', 'Am', 'Bm', 'C', 'D'],
  'F minor': ['Fm', 'Gdim', 'Ab', 'Bbm', 'Cm', 'Db', 'Eb'],
  'F# minor': ['F#m', 'G#dim', 'A', 'Bm', 'C#m', 'D', 'E'],
  'G minor': ['Gm', 'Adim', 'Bb', 'Cm', 'Dm', 'Eb', 'F'],
  'G# minor': ['G#m', 'A#dim', 'B', 'C#m', 'D#m', 'E', 'F#'],

};

// same notes
const sameNotes = {
  "Bb": "A#",
  "Eb": "D#",
  "Ab": "G#",
  "Db": "C#",
  "Gb": "F#"
};


// Define note buttons
const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Define major and minor scales based on available scales
const majorScales = {};
const minorScales = {};

for (const [scale, chords] of Object.entries(scales)) {
  if (scale.includes('major')) {
    majorScales[scale] = chords;
  } else if (scale.includes('minor')) {
    minorScales[scale] = chords;
  }
}

// Current selection variables
let selectedNote = 'A';
let selectedMode = 'minor';

// Get the switch element and the output element
const convertSwitch = document.getElementById('convertSwitch');
const chordsOutput = document.getElementById('chordsOutput');
const selectedScale = document.getElementById('selectedScale');

// Check if there's a saved state for the switch in localStorage
if (localStorage.getItem('convertSwitchState') === 'false') {
  convertSwitch.checked = false; // Uncheck the switch if previously unchecked
}

// Initialize function to set up the UI
function initialize() {
  const noteButtons = document.getElementById('noteButtons');

  // Create buttons for each note
  notes.forEach((note) => {
    const button = document.createElement('button');
    button.textContent = note;
    button.onclick = () => selectNoteButton(button, note);
    noteButtons.appendChild(button);

    // Add class to buttons containing "#"
    if (note.includes('#')) {
      button.classList.add('contains-hash');
    }

    // Highlight the button corresponding to the selected note
    if (note === selectedNote) {
      selectNoteButton(button, selectedNote);
    }

  });

  // Set the default selection
  selectScale('minor');
}



// Function to handle scale mode selection
function selectScale(mode) {
  selectedMode = mode;

  // Update button styles
  updateSelectedScaleButton();

  // Output chords
  outputChords();
}

// Function to handle random scale selection
function selectRandom() {
  const modes = ['major', 'minor'];
  const randomMode = modes[Math.floor(Math.random() * modes.length)];
  const randomNote = notes[Math.floor(Math.random() * notes.length)];

  // Update selectedNote with the new random note
  selectedNote = randomNote;

  // Clear highlighting from all note buttons
  updateSelectedNoteButton();

  // Find and select the button for the random note
  const noteButtons = document.querySelectorAll('#noteButtons button');
  noteButtons.forEach(button => {
    if (button.textContent === randomNote) {
      selectNoteButton(button, randomNote);
    }
  });

  // Update scale
  selectScale(randomMode);
}

// Function to handle note selection
function selectNoteButton(button, note) {
  // Update the selected note
  selectedNote = note;

  // Update button styles if a button reference is provided
  if (button) {
    updateSelectedNoteButton(button);
  }

  // Output chords
  outputChords();
}

// Function to update button styles for the selected note
function updateSelectedNoteButton(selectedButton = null) {
  // Remove the 'selected' class from all note buttons
  const buttons = document.querySelectorAll('#noteButtons button');
  buttons.forEach(btn => btn.classList.remove('selected'));

  // Add the 'selected' class to the chosen note button if specified
  if (selectedButton) {
    selectedButton.classList.add('selected');
  }
}

// Function to update button styles for the selected scale mode
function updateSelectedScaleButton() {
  const majorButton = document.getElementById('majorButton');
  const minorButton = document.getElementById('minorButton');

  // Remove the 'selected' class from both buttons
  majorButton.classList.remove('selected');
  minorButton.classList.remove('selected');

  // Add the 'selected' class to the chosen scale mode button
  if (selectedMode === 'major') {
    majorButton.classList.add('selected');
  } else if (selectedMode === 'minor') {
    minorButton.classList.add('selected');
  }
}



// Function to output the chords
function outputChords() {
  const scale = `${selectedNote} ${selectedMode}`;
  let chords;

  if (selectedMode === 'major') {
    chords = majorScales[scale];
  } else if (selectedMode === 'minor') {
    chords = minorScales[scale];
  }

  if (chords) {
    selectedScale.textContent = `Selected Scale: ${selectedNote} ${selectedMode}`;

    console.log("Original chords:", chords);

    // Apply conversion only if the switch is checked
    const convertedChords = chords.map(chord => {
      if (convertSwitch.checked) {
        return sameNotes[chord] || chord; // Convert only if enabled
      }
      return chord; // Otherwise, return as is
    });

    console.log("Converted chords:", convertedChords);

    chordsOutput.innerHTML = convertedChords.map((chord, index) => {
      return `<span style="display: inline-block;"><span class="alternate-color" style="font-weight: bold;">[${index + 1}]</span><span style="font-weight: bold;">${chord}</span></span> `;
    }).join('');
  } else {
    selectedScale.textContent = `Selected Scale: N/A`;
    chordsOutput.textContent = 'No scale available';
  }
}

// Listen for switch changes and save state to localStorage
convertSwitch.addEventListener('change', () => {
  // Save the current state of the switch
  localStorage.setItem('convertSwitchState', convertSwitch.checked);

  // Update the chords output after the switch is toggled
  outputChords();
});

// Call the function on initial load
outputChords();


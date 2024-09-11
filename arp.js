function r_arp(x) {
    // Use only 0 and 1 octaves with weights
    const oc = [0, 0, 0, 0, 0, 1];
    let octave = oc[Math.floor(Math.random() * (5 - 0 + 1) + 0)];
    let velocity = (Math.floor(Math.random() * (12 - 5 + 1) + 5)) * 10; // 50 - 120
    const t1 = [8, 4];
    let timing = t1[Math.floor(Math.random() * (1 - 0 + 1) + 0)];
    let note = Math.floor(Math.random() * (x - 1 + 1) + 1);
    // Change to not modify innerHTML every cycle
    document.getElementById('result-d').innerHTML += `<span class="alternate-color">note ${note}</span>, time ${timing}, octave ${octave}, velocity ${velocity}<br>`;

    document.getElementById('res-all').innerHTML += `${note} `;
}

let al = 0; let al_alt = 0;

function newA() {
    al = Math.floor(Math.random() * 8) + 2; // random.randint(2, 9)
    al_alt = al;
    while (al == al_alt) {
        al_alt = Math.floor(Math.random() * 6) + 3; // random.randint(3, 8)
    }
}

// Get alternative values
newA();
let n_c = 0;
let aeu = 0;

document.getElementById('aeu').onclick = function () {
    n_c = document.getElementById('notes-chord').value;
    aeu = document.getElementById('arp-length').value;
    document.getElementById('result-d').innerHTML = '';
    document.getElementById('res-all').innerHTML = '';
    for (let i = 0; i < aeu; i++) {
        r_arp(n_c);
    }
}

document.getElementById('al').textContent = `Arp length: ${al}`;

document.getElementById('al').onclick = function () {
    n_c = document.getElementById('notes-chord').value;
    document.getElementById('result-d').innerHTML = '';
    document.getElementById('res-all').innerHTML = '';
    for (let i = 0; i < al; i++) {
        r_arp(n_c);
    }
}

document.getElementById('al_alt').textContent = `Arp length: ${al_alt}`;

document.getElementById('al_alt').onclick = function () {
    n_c = document.getElementById('notes-chord').value;
    document.getElementById('result-d').innerHTML = '';
    document.getElementById('res-all').innerHTML = '';
    for (let i = 0; i < al_alt; i++) {
        r_arp(n_c);
    }
}

document.getElementById('new').onclick = function () {
    document.getElementById('result-d').innerHTML = "";
    document.getElementById('res-all').innerHTML = '';
    newA();
    document.getElementById('al').textContent = `Arpeggio length: ${al}`;
    document.getElementById('al_alt').textContent = `Arpeggio length: ${al_alt}`;
}

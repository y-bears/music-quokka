document.getElementById('bpm-go').onclick = function () {
    let bpm1 = Number(document.getElementById('bpm1').value);
    let bpm2 = Number(document.getElementById('bpm2').value);
    console.log('min = ', bpm1);
    console.log('max = ', bpm2);
    // 1 is minus, 2 is plus
    let rb = Math.floor(Math.random() * 2) + 1;
    let rb1 = Math.floor(Math.random() * (bpm2 - bpm1 + 1)) + bpm1;
    console.log('r ', rb);
    console.log('r1 ', rb1);
    if (rb == 1 && rb1 % 5 != 0) {
        while (rb1 % 5 != 0) {
            rb1--;
        }
    } else {
        while (rb1 % 5 != 0) {
            rb1++;
        }
    }
    console.log('rb1 end ', rb1);
    document.getElementById('result-bpm').innerHTML = `${rb1} BPM`;
}

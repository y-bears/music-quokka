document.getElementById('go').style.width = '25%';

document.getElementById('go').onclick = function(){
    bpm1 = Number(document.getElementById('bpm1').value);
    bpm2 = Number(document.getElementById('bpm2').value);
    console.log('min = ', bpm1);
    console.log('max = ', bpm2);
    // 1 is minus, 2 is plus
    r = Math.floor(Math.random() * (2 - 1 + 1) ) + 1; 
    r1 = Math.floor(Math.random() * (bpm2 - bpm1 + 1)) + bpm1;
    console.log('r ', r);
    console.log('r1 ', r1);
    if(r == 1 && r1 % 5 != 0){
        while(r1 % 5 != 0){
            r1--;
        }

    }
    else {
        while(r1 % 5 != 0){
            r1++;
        }
    }
    console.log('r1 end ', r1);
    document.getElementById('result').innerHTML = `${r1} BPM`;
}
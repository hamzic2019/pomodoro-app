let secounds = document.querySelector('.secounds-display');
let minutes = document.querySelector('.minutes-display');

let secDiv = document.querySelector('.secounds');
let minDiv = document.querySelector('.minutes')

let secDivHeight = 250;
let minDivHeight = 250;
let secs = 0;
let mins  = 0;

console.log(`Minutes: ${mins} - Secounds: ${secs}`)

setInterval(() => {
    
    secs += 1;

    if(secs > 59) {
        secs = 0;
        mins += 1;
    }

    console.log(`Minutes: ${mins} - Secounds: ${secs}`)

    secounds.innerHTML = `${secs}`;
    minutes.innerHTML = `${mins}`

    if (secDivHeight > 449) return secDivHeight = 250;
    secDiv.style.height = (secDivHeight += 3.33) + 'px';

    if(minDivHeight > 449) return minDivHeight = 250;
    
    

}, 1000);

setInterval(() => {
    minDiv.style.height = (minDivHeight += 3.33) + 'px';
}, 60000);

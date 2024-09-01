const names = document.getElementById('name');
const numbers = document.getElementById('number');
const datas = document.getElementById('data');
const cvv = document.getElementById('cvv');

const textNumber = document.getElementById('text-number');
const textData = document.getElementById('text-data');
const textName = document.getElementById('text-name');
const srcBandeira = document.getElementById('src-bandeira');

const textCvv = document.getElementById('text-cvv');

names.addEventListener('input', () => {
    textName.textContent = names.value;
});

numbers.addEventListener('input', () => {
    textNumber.textContent = numbers.value;
    let numberLength = numbers.value.length;

    if(numbers.value.charAt(0) === '4') {
        srcBandeira.innerHTML = '<img src="assets/images/logo-visa.png" alt="logo-visa" width="60">';
    } else if(numbers.value.charAt(0) === '5') {
        srcBandeira.innerHTML = '<img src="assets/images/logo-master.png" alt="logo-master" width="60">';
    } else if(numbers.value.charAt(0) === '6') {
        srcBandeira.innerHTML = '<img src="assets/images/logo-elo.png" alt="logo-el" width="60">';
    } else {
        srcBandeira.innerHTML = '';
    }

    if(numberLength === 4 || numberLength === 9 || numberLength === 14) {
        numbers.value += ' ';
    }

    if(numberLength === 19) {
        numbers.style.border = '1px solid green'
    } else {
        numbers.style.border = '1px solid red'
    }
});

datas.addEventListener('input', () => {
    textData.textContent = datas.value;
    let dataLength = datas.value.length;

    if(dataLength === 2) {
        datas.value += "/";
    }

    if(dataLength === 5) {
        datas.style.border = '1px solid green'
    } else {
        datas.style.border = '1px solid red'
    }
});

cvv.addEventListener('input', () => {
    textCvv.textContent = cvv.value;
    let cvvLength = cvv.value.length;

    if(cvvLength === 3) {
        cvv.style.border = '1px solid green'
    } else if (!NaN){
        cvv.style.border = '1px solid red'
    }
});







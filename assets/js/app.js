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

    if(numbers.value.charAt(0) === '4') {
        srcBandeira.innerHTML = '<img src="assets/images/logo-visa.png" alt="logo-visa">';
    } else if(numbers.value.charAt(0) === '5'){
        srcBandeira.innerHTML = '<img src="assets/images/logo-master.png" alt="logo-master">';
    } else if(numbers.value.charAt(0) === '6'){
        srcBandeira.innerHTML = '<img src="assets/images/logo-elo.png" alt="logo-el">';
    } else {
        srcBandeira.innerHTML = '';
    }
});

datas.addEventListener('input', () => {
    textData.textContent = datas.value;
});

cvv.addEventListener('input', () => {
    textCvv.textContent = cvv.value;
});







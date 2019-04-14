const enAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
                    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
                    'q', 'r', 's', 't', 'u', 'v', 'w', 
                    'x', 'y', 'z'];

const ruAlphabet = ['а', 'б', 'в', 'г', 'д', 
                    'е', 'ё', 'ж', 'з', 'и', 'й', 
                    'к', 'л', 'м', 'н', 
                    'о', 'п', 'р', 'с', 'т', 
                    'у', 'ф', 'х', 'ц', 'ч', 
                    'ш', 'щ', 'ъ', 'ы', 'ь', 
                    'э', 'ю', 'я'];
                    
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

                    
function cryptText() {
    let inputForm = document.querySelector('#inputForm').value;
    let inputKey = document.querySelector('#inputKey').value * 1;  
    
    let langArr;
    let index;
    let result = '';
  
    for(let i = 0; i < inputForm.length; i++) {
        if(enAlphabet.includes(inputForm[i])) langArr = enAlphabet;
        if(ruAlphabet.includes(inputForm[i])) langArr = ruAlphabet;
        if(numbers.includes(inputForm[i])) langArr = numbers;
        index = langArr.indexOf(inputForm[i]);
        if(index == -1) {
            result += inputForm[i];
        } else {
            if(index + inputKey >= langArr.length) {
                result += langArr[(index + inputKey) - langArr.length];
            } else {
                result += langArr[index + inputKey];     
            }
        }
    }
    console.log(result);
    document.querySelector('#outputForm').value = result;
}


function decryptText() {
    let inputForm = document.querySelector('#inputForm').value;
    let inputKey = document.querySelector('#inputKey').value * 1;  
    
    let langArr;
    let index;
    let result = '';
    
    for(let i = 0; i < inputForm.length; i++) {
        if(enAlphabet.includes(inputForm[i])) langArr = enAlphabet;
        if(ruAlphabet.includes(inputForm[i])) langArr = ruAlphabet;
        if(numbers.includes(inputForm[i])) langArr = numbers;
        index = langArr.indexOf(inputForm[i]);
        if(index == -1) {
            result += inputForm[i];
        } else {
            if(index - inputKey < 0) {
                result += langArr[(index - inputKey) + langArr.length];
            } else {
                result += langArr[index - inputKey];     
            }
        }
    }
    console.log(result);
    document.querySelector('#outputForm').value = result;
}




let inputForm = document.querySelector('#inputForm').value;

let inputKey = document.querySelector('#inputKey').value * 1;

let langSelect = document.querySelector('#lang').value;

let crypt = document.querySelector('#crypt');
let decrypt = document.querySelector('#decrypt');

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
                    
//####################################################################
function cryptText() {
    let langArr;
    let index;
    let result = '';
  
    if(langSelect == 'enAlphabet') langArr = enAlphabet;
    if(langSelect == 'ruAlphabet') langArr = ruAlphabet;
  
    for(let i = 0; i < inputForm.length; i++) {
        index = langArr.indexOf(inputForm[i]);
        if(index == -1) {
            result += inputForm[i];
        } else {
            if(index + inputKey > langArr.length) {
                result += langArr[(index + inputKey) - langArr.length];
            } else {
                result += langArr[index + inputKey];     
            }
        }
        console.log(`symbol: ${inputForm[i].toString()} \n number in arr: ${index+1} \n last symbol: ${result[result.length - 1]}`);
    }
    document.querySelector('#outputForm').value = result;
}

//####################################################################
function decryptText() {
    let langArr;
    let index;
    let result = '';
    
    if(langSelect == 'enAlphabet') langArr = enAlphabet;
    if(langSelect == 'ruAlphabet') langArr = ruAlphabet;
    
    for(let i = 0; i < inputForm.length; i++) {
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
        console.log(`symbol: ${inputForm[i].toString()} \n number in arr: ${index+1} \n last symbol: ${result[result.length - 1]}`)
    }
}




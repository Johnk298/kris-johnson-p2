var vowelCount = document.getElementById('vowelCount');

function countVowel(vowelArr){
    vowelArr = vowelArr.toLowerCase();
    let vowArr=['a','e','i','o','u'],
        counter=0;

        for(let letter of vowelArr){
            if(vowArr.includes(letter)){
                counter++;
                vowelCount.classList.add('blink');
            }
            else{
                vowelCount.classList.remove('blink');
            }
        }
        vowelCount.innerHTML= counter;
}
// consonants//
var constCount = document.getElementById('constCount');

function countConst(constArr){
    constArr = constArr.toLowerCase();
    let conArr=['b','c','d','f','g','h','j','k','f','l','m','n','p','q','r','s','t','v','w','x','y','z'],
        counter=0;

        for(let x of constArr){
            if(conArr.includes(x)){
                counter++;
                constCount.classList.add('blink');
            }
            else{
                constCount.classList.remove('blink');
            }
        }
        constCount.innerHTML= counter;
}
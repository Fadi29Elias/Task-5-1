const display=document.querySelector('.display');

function appendToDisplay(input){
    display.value+=input;
}


function clearDisplay(){
    display.value = '';
}

function calculat(){
    try{
        display.value = eval(display.value);
        }
        catch(err){
            display.value = 'Error';
            }
}

    

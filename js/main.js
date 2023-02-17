
function getValueById(inputId){
    const getInputValueString = document.getElementById(inputId).value;
    const getInputValue =  parseFloat(getInputValueString);
    return getInputValue
}


document.getElementById('triangle-btn').addEventListener('click', function(){
    
    const getInputValueString = document.getElementById('triangle-input-b').value;
    const getInputValue =  parseFloat(getInputValueString);

})
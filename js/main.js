
let slNumber =  0;

// get value function
function getValueById(inputId){
    const getInputValueString = document.getElementById(inputId).value;
    const getInputValue =  parseFloat(getInputValueString);
    document.getElementById(inputId).value = "";
    return getInputValue
}

// create function for make table row

function createTableRow(itemsName, slNumber, calculate ) {
    
    // get item name
    const itemName =  document.getElementById(itemsName).innerText;

    // get table body 
    const tableBody =  document.getElementById('table-body');
    const tr =  document.createElement('tr');
    tr.innerHTML =  `
        <th>${slNumber}</th>
        <td>${itemName}</td>
        <td>${calculate}cm<sup>2</sup></td>
        <td><button  class="btn btn-primary text-[10px]">Convert to m<sup>2</sup></button></td>
    `
    tableBody.appendChild(tr);
}


// Traiangle 
document.getElementById('triangle-btn').addEventListener('click', function(){
    
    const triangleValue1 =  getValueById('triangle-input-b');
    const triangleValue2 =  getValueById('triangle-input-h');

        if(isNaN(triangleValue1) || isNaN(triangleValue2)){
            alert('Please put number');
            return;
        }else if(triangleValue1 < 0 || triangleValue2 < 0){
            alert('Please put positive number');
            return;
        }
    const calCulateTriangle =  0.5 * triangleValue1 *  triangleValue2 ;

    slNumber+= 1;
// show calculation data on table
    createTableRow('triangle' ,slNumber, calCulateTriangle);

})

// Rectangle 
document.getElementById('rectangle-btn').addEventListener('click', function(){
    
    const rectangleValue1 =  getValueById('rectangle-input-w');
    const rectangleValue2 =  getValueById('rectangle-input-i');

        if(isNaN(rectangleValue1) || isNaN(rectangleValue2)){
            alert('Please put number');
            return;
        }else if(rectangleValue1 < 0 || rectangleValue2 < 0){
            alert('Please put positive number');
            return;
        }
    const calCulateRectangle  =  rectangleValue1 *  rectangleValue2 ;

    slNumber+= 1;
// show calculation data on table
    createTableRow('rectangle' ,slNumber, calCulateRectangle);

})
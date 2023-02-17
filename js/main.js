
// get value function
function getValueById(inputId){
    const getInputValueString = document.getElementById(inputId).value;
    const getInputValue =  parseFloat(getInputValueString);
    document.getElementById(inputId).value = "";
    return getInputValue
}

// create function for make table row

function createTableRow(itemsName, calculate ) {
    
    // get item name
    const itemName =  document.getElementById(itemsName).innerText;

    // get table body 
    const tableBody =  document.getElementById('table-body');
    const tr =  document.createElement('tr');
    tr.innerHTML =  `
        <th>${1}</th>
        <td>${itemName}</td>
        <td>${calculate}</td>
        <td><button  class="btn btn-primary text-sm">Convert to m<sup>2</sup></button></td>
    `
    tableBody.appendChild(tr);
}

// Traiangle 
document.getElementById('triangle-btn').addEventListener('click', function(){
    
    const triangleValue1 =  getValueById('triangle-input-b');
    const triangleValue2 =  getValueById('triangle-input-h');

    const calCulateTriangle =  0.5 * triangleValue1 *  triangleValue2 ;



    // get item name
    const itemName =  document.getElementById('triangle').innerText;

    // get table body 
    const tableBody =  document.getElementById('table-body');
    const tr =  document.createElement('tr');
    tr.innerHTML =  `
        <th>${1}</th>
        <td>${itemName}</td>
        <td>${calCulateTriangle}</td>
        <td><button  class="btn btn-primary text-sm">Convert to m<sup>2</sup></button></td>
    `
    tableBody.appendChild(tr);
    
})
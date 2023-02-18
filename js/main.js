
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
    const totalResultTriangle=  parseFloat(calCulateTriangle.toFixed(2));

    slNumber+= 1;
// show calculation data on table
    createTableRow('triangle' ,slNumber, totalResultTriangle);

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
    const totalResultRectangle=  parseFloat(calCulateRectangle.toFixed(2));

    slNumber+= 1;
// show calculation data on table
    createTableRow('rectangle' ,slNumber, totalResultRectangle);

})


// Parallelogram

document.getElementById('parallelogram-btn').addEventListener('click', function(){
    
    const parallelogramValue1 =  getValueById('parallelogram-input-b');
    const parallelogramValue2 =  getValueById('parallelogram-input-h');

        if(isNaN(parallelogramValue1) || isNaN(parallelogramValue2)){
            alert('Please put number');
            return;
        }else if(parallelogramValue1 < 0 || parallelogramValue2 < 0){
            alert('Please put positive number');
            return;
        }
    const calCulateParallelogram  =  parallelogramValue1 *  parallelogramValue2 ;
    const totalResultParallelogram =  parseFloat(calCulateParallelogram.toFixed(2));

    slNumber+= 1;
// show calculation data on table
    createTableRow('parallelogram' ,slNumber, totalResultParallelogram);

})

// Rhombus
document.getElementById('rhombus-btn').addEventListener('click', function(){
    
    const rhombusValue1 =  getValueById('rhombus-input-d1');
    const rhombusValue2 =  getValueById('rhombus-input-d2');

        if(isNaN(rhombusValue1) || isNaN(rhombusValue2)){
            alert('Please put number');
            return;
        }else if(rhombusValue1 < 0 || rhombusValue2 < 0){
            alert('Please put positive number');
            return;
        }
    const calCulateRhombus  = 0.5 *  rhombusValue1 *  rhombusValue2 ;
    const totalResultRhombus =  parseFloat(calCulateRhombus.toFixed(2));

    slNumber+= 1;
// show calculation data on table
    createTableRow('rhombus' ,slNumber, totalResultRhombus);

})

// Pentagon
document.getElementById('pentagon-btn').addEventListener('click', function(){
    
    const pentagonValue1 =  getValueById('pentagon-input-p');
    const pentagonValue2 =  getValueById('pentagon-input-b');

        if(isNaN(pentagonValue1) || isNaN(pentagonValue2)){
            alert('Please put number');
            return;
        }else if(pentagonValue1 < 0 || pentagonValue2 < 0){
            alert('Please put positive number');
            return;
        }
    const calCulatePentagon  = 0.5 *  pentagonValue1 *  pentagonValue2 ;
    const totalResultPentagon =  parseFloat(calCulatePentagon.toFixed(2));

    slNumber+= 1;
// show calculation data on table
    createTableRow('pentagon' ,slNumber, totalResultPentagon);

})

// Ellipse
document.getElementById('ellipse-btn').addEventListener('click', function(){
    
    const ellipseValue1 =  getValueById('ellipse-inputA');
    const ellipseValue2 =  getValueById('ellipse-inputB');

        if(isNaN(ellipseValue1) || isNaN(ellipseValue2)){
            alert('Please put number');
            return;
        }else if(ellipseValue1 < 0 || ellipseValue2 < 0){
            alert('Please put positive number');
            return;
        }

    const calCulateEllipse  = 3.1415 *  ellipseValue1 *  ellipseValue2 ;
    const totalResultEllipse =  parseFloat(calCulateEllipse.toFixed(2))

    slNumber+= 1;
// show calculation data on table
    createTableRow('ellipse' ,slNumber, totalResultEllipse);

})


// Random card bg color 

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
      
    }
    console.log(color);
    return 'rgb(' + color.join(', ') + ')';
  } 
  
//   get card div 
  const getCard = document.getElementsByClassName('card');

  for (const card of getCard) {
        card.addEventListener('mouseover' , function(){
            card.style.backgroundColor =  randomColor();
        })
        card.addEventListener('mouseout', function() {
            card.style.backgroundColor = 'white';
          });
  }


 
  
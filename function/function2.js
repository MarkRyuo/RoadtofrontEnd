let num1 = "34" ;
let num2 = "50" ;

num1 = Number(num1) ; //Type conversion 
num2 = Number(num2) ;

let resultAdd = addOf(num1, num2) ;

console.log(`${num1} + ${num2} = ${resultAdd}`) ;

function addOf(num1, num2) {
  
  let result = num1 + num2 ;
  return result ;
  
}

let resultSub = subOf(num1, num2) ;

console.log(`${num1} - ${num2} = ${resultSub}`) ;


function subOf(num1, num2) {

  let result = num1 - num2 ;
  return result ;
}


let resultMulti = mulOf(num1, num2) ;
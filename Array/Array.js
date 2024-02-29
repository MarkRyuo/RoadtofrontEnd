// Todo Array = a variable like structure that can hold more than 1 value  

// let listNames = ["Ryuo", "Moda", "Mark", "Nicole", "Samantha", "Sopheya"] ;

// console.log(listNames[1]) ;

let numbers = ["one", "two", "three", "four", "five"] ;

// numbers.pop() ; // pop is to remove the last element 
// numbers.push("six") ; // to add to the last of list 
numbers.unshift("zero") ; // to add to the first of list

let xNumber = numberOf(numbers) ;

console.log("Is the ", xNumber) ;

function numberOf(numbers) {

  for(let i = 0 ; i < numbers.length ; i++){
    return numbers[i] ;
  }
}
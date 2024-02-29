// Todo Array = a variable like structure that can hold more than 1 value  

// let listNames = ["Ryuo", "Moda", "Mark", "Nicole", "Samantha", "Sopheya"] ;

// console.log(listNames[1]) ;

let numbers = ["one", "two", "three", "four", "five"] ;

// numbers.pop() ; // pop is to remove the last element 
numbers.push("six") ;
numberOf(numbers) ;

function numberOf(numbers) {

  for(let i = 0 ; i < numbers.length ; i++){
    console.log(numbers[i]) ;
  }
}
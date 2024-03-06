
      // todo Parameter
// function names (name) {

//   console.log(name) ;
// } ;

   // todo Argument
// names("Jhon Mark") ; // Call the function 

// function nameOf() {

//   const list = ["Jhon Mark", "Nicole", "Mark", "Samantha", "Sopheya"] ;

//   let names = list[0] ;
//   return names ;

// } ;

// const names = nameOf() ;

// function characters(names) {

//   console.log(names) ;
// } ;

// characters(names) ;

// 

// function happyBirthday() {
//   console.log("Happy Birtday") ;
// }

// happyBirthday()

// let birth = "Happy Birthday" ;

// let b = happyBirthday(birth) ;

// console.log(b) ;

// console.log(happyBirthday("Happy Birthday!")) ;



// function happyBirthday(birth) {
  
//   for(let i = 0 ; i < 10 ; i++ ) {

//     birth += i 
//     return birth ;
    
      
//   }

// } ;


// todo function is like a box 


// function userOf() {

//   let users = ["Jhon Mark", 21 ] ;
//   users.push("MarkRyuo") ;
//   users.unshift("moda.")
//   return users ; 

// }

// userOf() ;
// // console.log(userOf()) ;
// names(userOf()) ;

// function names(users) {
  
//   console.log(`My name is ${users[1]} and my age is ${users[2]}`)

// }

// const user = ["Leomar", "Martha", "John Carlo", "Jhon Mark", "Niel", "Scavanger"] ;
// let userOf = user[""] ;

// boxType(user, userOf) ;

// function boxType(user) {

//   user[0] ;

//   if(userOf == user[0]) {
      
//   }
// }


// I think the array is always to be a const
const users = ["Jhon Mark", "Nicole", "Key", "Samantha", "Sopheya"] ; // Array 
let age = 19 ;
let gpa = 2.0 ;

userOf(users) ; // call the function 

function userOf(users) {

  let userName = users[1] ; // Creating a variable to host the users

  if(userName == users[0]) {
    console.log(`Hello ${users[0]} your turn!`) ; // If userName is Entered 0 Print the name of the index 0 in array 
  }
  else if(userName == users[1]){
    console.log(`Hello ${users[1]} your turn!`) ; // Nicole is the index 1
  }
  else if(userName == users[2]){
    console.log(`Hello ${users[2]} your turn!`) ; // key is the index 2
  }
  else if(userName == users[3]){
    console.log(`Hello ${users[3]} your turn!`) ; // Samantha is the index 3
  }
  else if(userName == users[4]){
    console.log(`Hello ${users[4]} your turn!`) ; // Sopheya is the index 4
  }
  else {
    console.log("You Entered is not Found") ;
  }

 } ;


ageOf(age) ; // call the function to display it

      //  age is called Parameter of this function 
 function ageOf(age){

  switch(true){

    case age >= 15 && age < 18 :
      console.log(`${age}Your a Teenager!`) ;
      break ;
    
    case age <= 19 || age >= 30 :
      console.log("Your a Min Adult") ;
      break ;

    case age > 30 || age < 60 :
      console.log("Your a Adult Adult") ;
      break ;
    
    case age > 60 :
      console.log("Your a Senior") ;
      break ;
    
    default :
      console.log("Enter") ;
  }
 } ;
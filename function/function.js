
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

function happyBirthday(birth) {

  for(let i = 0 ; i <= 10 ; i++ ) {
    birth += i ;
    return birth ;
  }

} ;

let res = happyBirthday("Happy Birtday") ;
console.log(res)
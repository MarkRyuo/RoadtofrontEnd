// Todo Array 

const USERNAME = ["Marck", "Ryuo", "Moda", "Arck", "Mak", "Jhon Mark"];
let mc = 2 ;
nameOfCharacter(USERNAME, mc) ;

function nameOfCharacter(USERNAME,mc) {
  
  switch(true){
    case mc == 0 :
      console.log(USERNAME[0]) ;
      break ;
    case mc == 1 :
      console.log(USERNAME[1]) ;
      break ;
    case mc == 2 :
      console.log(USERNAME[2]) ;
      break ;
    case mc == 3 :
      console.log(USERNAME[3]) ;
      break ;
    case mc == 4 :
      console.log(USERNAME[4]) ;
      break ;
    case mc == 5 : 
      console.log(USERNAME[5]) ;
      break ;
    default :
      console.log(mc, " Character is not found in the verse") ;
  }
}

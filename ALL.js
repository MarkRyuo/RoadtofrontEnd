// Todo Array 

const USERNAME = ["Marck", "Ryuo", "Moda", "Arck", "Mak", "Jhon Mark"];
let mc = 4 ;
nameOfCharacter(USERNAME, mc) ;

function nameOfCharacter(USERNAME,mc) {
  
  switch(true){
    case mc == 0 :
      console.log(`Your ${USERNAME[0]}, And you put the number ${mc}!`) ;
      break ;
    case mc == 1 :
      console.log(`Your ${USERNAME[1]}, And you put the number ${mc}!`) ;
      break ;
    case mc == 2 :
      console.log(`Your ${USERNAME[2]}, And you put the number ${mc}!`) ;
      break ;
    case mc == 3 :
      console.log(`Your ${USERNAME[3]}, And you put the number ${mc}!`) ;
      break ;
    case mc == 4 :
      console.log(`Your ${USERNAME[4]}, And you put the number ${mc}!`) ;
      break ;
    case mc == 5 : 
      console.log(`Your ${USERNAME[5]}, And you put the number ${mc}!`) ;
      break ;
    default :
      console.log(mc, " Character is not found in the verse") ;
  } ;
} ; 

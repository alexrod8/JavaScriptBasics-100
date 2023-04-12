const userName = 'Alexis Rodriguez';

userName ? console.log('Hello , Alexis!'): console.log('Hello!');

let userQuestion = 'When will i become succesful? ';
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch(randomNumber) {
 case 0:
   eightBall = 'It is certain';
   break;
   case 1:
    eightBall ='It is decidedly so';
     break;
     case 2:
      eightBall ='reply hazy try again';
       break;
       case 3:
        eightBall ='cannot predict now';
         break;
         case 4: 
         eightBall ='Do not count on it';
         break;
         case 5:
          eightBall ='My sources say no';
           break;
           case 6: 
           eightBall ='Outlook not looking so good';
           break;
           case 7: 
           eightBall = 'Signs point to yes';
           break;

}

console.log('The magic 8 ball says ' + eightBall);

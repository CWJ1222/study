// function hasCola(str){
//   if(str.indexOf("cola")>-1){
//     console.log("there is forbidden");
//   }else{
//     console.log("pass");
//   }
//   }
// hasCola("WOW sida is a baet thing for me");
// hasCola("But cola is good");
// hasCola("cola");

function hasCola(str) {
  if (str.includes('cola')) {
    console.log('there is forbidden');
  } else {
    console.log('pass');
  }
}
hasCola('WOW sida is a baet thing for me');
hasCola('But cola is good');
hasCola('cola');

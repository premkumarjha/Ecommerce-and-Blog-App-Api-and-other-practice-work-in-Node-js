
function weekcount(date){

    if (date/7<=1) {
        console.log("1st week")
      } else if ((date/7>1)&&(date/7<=2)) {
        console.log("2nd week")
      } else if((date/7>2)&&(date/7<=3)) {
        console.log("3rd week")
      }else if((date/7>3)&&(date/7<=4)){
        console.log("4th  week")
      }else if((date/7>4)&&(date/7<=5)){
        console.log("5th week")
      }
}

weekcount(30);
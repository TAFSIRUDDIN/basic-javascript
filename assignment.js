// https://github.com/TAFSIRUDDIN/basic-javascript



// Kilometer to meter problen solving
function kilometerToMeter(kilometer) {
   if(kilometer < 0){
      var meter = "Kilometer can not negetive value.(Thank You)";
   
   }
   else{
      var meter = kilometer * 1000;   /* we know 1km = 1000m*/
     
   }
   return meter;
}

// All expected output
// Ask first man
var firstMan = kilometerToMeter(-12);
console.log(firstMan);
// Ask second Man
var secondMan = kilometerToMeter(20);
console.log(secondMan);
// Ask third Man
var thirdMan = kilometerToMeter(0);
console.log(thirdMan);

//All expected output





//budgetCalculator problem solving

function budgetCalculator(clock, phone, laptop){
   var errormessege = 'Quentity dose not negetive value. (Thank You)';
   var errormessege1 = 'He was not bought anything. (Thank You)';
   
   if(clock <  0 || phone < 0 || laptop < 0){
         var totalPrice = errormessege;
      
   }
   else if(clock ==  0 && phone == 0 && laptop == 0){
         var totalPrice = errormessege1;
        
   }
   else{
         var totalClockPrice = clock * 50;
         var totalPhonePrice = phone * 100;
         var totalLaptopPrice = laptop * 500;
         var totalPrice = totalClockPrice+ totalPhonePrice + totalLaptopPrice;
         
   }
   return totalPrice;
}
// All expected output
//// Ask first man
var firstManBudgetRange = budgetCalculator(20, 10, 2);
console.log(firstManBudgetRange);
// Ask second man
var secondManBudgetRange = budgetCalculator(20, -10, 2);
console.log(secondManBudgetRange);
// Ask third man
var thirdManBudgetRange = budgetCalculator(0, 10, 2);
console.log(thirdManBudgetRange);
// Ask fourth man
var fourthManBudgetRange = budgetCalculator(0, 0, 0);
console.log(fourthManBudgetRange);

//All expected output



// hotelcost problem solving

function hotelCost(day){
   var totalCost = 0;
   var messege = 'Quentity of days dose not negetive value. (Thank You)';
   var messege1 = 'They are not stay hare for a single days. (Thank You)';
   if(day < 0){
      totalCost = messege;
   }
   else if(day == 0){
      totalCost = messege1;
   }
   else{
         if(day<=10){
            totalCost = day * 100;
         }
         else if(day <=20){
            var basic = 10 * 100;
            var extraDay = day - 10;
            var offerOne = extraDay * 80;
            totalCost = basic + offerOne;
         }
         else{
            var basic = 10 * 100;
            var offerOne = 10 * 80;
            var extraDay = day - 20;
            var offerTwo = extraDay * 50;
            totalCost = basic + offerOne + offerTwo;
         }
   }
   return totalCost;
}
//All expected output
//First man
var firstMan = hotelCost(-10);
console.log(firstMan);
//Second man
var secondMan = hotelCost(0);
console.log(secondMan);
//third man
var thirdMan = hotelCost(10);
console.log(thirdMan);
//Fourth man
var fourthMan = hotelCost(17);
console.log(fourthMan);
//Fifth man
var fifthMan = hotelCost(20);
console.log(fifthMan);
//Sixth man
var sixthMan = hotelCost(71);
console.log(sixthMan);

//All expected output






//megafriend problem solving

function megaFriend(arr){
   var large = arr[0];
   if(arr.length == 0){
      large = 'There is no name in your friend list. (Thank you)'
   }
   else{
      for(var i = 0; i < arr.length; i++){
         var element = arr[i];
         if(element.length > large.length){
             large = element;
         }
      }
   }
return large;
}


//All expected output
//1st man
var big = megaFriend([]);
console.log(big);
//nd man
var big = megaFriend(["hablu", "babluu", "ejjuyyy", "plmiis", "tafsiruddin", "borkottt", "znnnnfqknaz", "qqquuhii", "youroy"]);
console.log(big);

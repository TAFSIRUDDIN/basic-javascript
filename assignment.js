// https://github.com/TAFSIRUDDIN/basic-javascript
// Kilometer to meter problen solving
function kilometerToMeter(kilometer) {
   if(kilometer < 0){
      var meter = "Kilometer can not negetive value.(Thank You)";
      return meter;
   }
   else{
      var meter = kilometer * 1000;   /* we know 1km = 1000m*/
      return meter;
   }
   
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




//budgetCalculator problem solving

function budgetCalculator(clock, phone, laptop){
   var errormessege = 'Quentity dose not negetive value. (Thank You)';
   var errormessege1 = 'He was not bought anything. (Thank You)';
   
   if(clock <  0 || phone < 0 || laptop < 0){
         var totalPrice = errormessege;
         return totalPrice;
   }
   else if(clock ==  0 && phone == 0 && laptop == 0){
         var totalPrice = errormessege1;
         return totalPrice;
   }
   else{
         var totalClockPrice = clock * 50;
         var totalPhonePrice = phone * 100;
         var totalLaptopPrice = laptop * 500;
         var totalPrice = totalClockPrice+ totalPhonePrice + totalLaptopPrice;
         return totalPrice;
   }
}
// All expected output
var firstManBudgetRange = budgetCalculator(20, 10, 2);
console.log(firstManBudgetRange);
var secondManBudgetRange = budgetCalculator(20, -10, 2);
console.log(secondManBudgetRange);
var thirdManBudgetRange = budgetCalculator(0, 10, 2);
console.log(thirdManBudgetRange);
var fourthManBudgetRange = budgetCalculator(0, 0, 0);
console.log(fourthManBudgetRange);
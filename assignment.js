function kilometerToMeter(kilometer) {
   if(kilometer < 0){
    var meter = "Kilometer can not negetive value";
    return meter;
   }
   else{
    var meter = kilometer * 100;
    return meter;
   }
}
// Ask first man
var firstMan = kilometerToMeter(-12);
console.log(firstMan);
// Ask second Man
var secondMan = kilometerToMeter(20);
console.log(secondMan);
// Ask third Man
var thirdMan = kilometerToMeter(0);
console.log(thirdMan);
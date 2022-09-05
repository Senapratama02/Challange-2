function checkTypeNumber(num){
  if ((num % 2) ==0){
    result="GENAP";
  }
  else{
    result="GANJIL";
  }
return result
}
console.log (checkTypeNumber(10))
console.log (checkTypeNumber(3))
console.log (checkTypeNumber("3"))
console.log (checkTypeNumber({}))
console.log (checkTypeNumber([]))
console.log (checkTypeNumber())


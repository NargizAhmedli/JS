function IsOdd(numbersArr){
    let nymbers = []
    for (let i = 0; i < numbersArr.length; i++) {
        if(typeof numbersArr[i]==`number`)
      if(numbersArr[i]%2==0){
         count++;
      }
    }
    return count;
}

console.log(IsOdd([1,2,3, "dass", true, false, null]))

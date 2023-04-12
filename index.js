function isPalindrome(word) {
  let len = word.length
  let loopTimes = len - 1 

  if(loopTimes > 0){
    for(let i = 0; i < loopTimes/2; i++){
      let a = word[i]
      let b = word[loopTimes - i]

      if(a == b){
        return true
      }
      else{
        return false 
      }
    }
  }
  else{
    return true
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

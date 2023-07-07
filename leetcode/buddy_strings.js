/*
Problem Link:
  https://leetcode.com/problems/buddy-strings/
*/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var buddyStrings = function(s, goal) {
  let result = false
  let mismatched = 0
  let misArray = []

  if (s.length != goal.length){
      return false
  }
  if (s === goal){
      let arr = []
      for (let i =0; i<s.length; i++){
          if (arr.includes(s[i])){
              return true
          }
          arr.push(s[i])
      }
  }

  for (let i =0; i< s.length; i ++){
          if(s[i] != goal[i]){
              mismatched++;
              misArray.push(s[i])
              misArray.push(goal[i])
          }
  }

  if (mismatched === 2 && misArray[0] === misArray[3] && misArray[1] === misArray[2] ){
      return true
  }

  return result
};

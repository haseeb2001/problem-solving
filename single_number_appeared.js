/*
Problem Link:
  https://leetcode.com/problems/single-number-ii/
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  let len = nums.length
  let occ = new Map();
  let count = 0
  for(let i =0; i< len; i++){
      count = occ.has(nums[i])? occ.get(nums[i]) + 1 : 1
      occ.set(nums[i],count)
  }
  let req_key = null;
  occ.forEach (function(value, key) {
      if (value === 1){
          req_key = key
      }
})

  return req_key
};

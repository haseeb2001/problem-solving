/*
Problem Link:
  https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestSubarray = function(nums) {
  let len = nums.length;
  let hash = new Map();
  let left = 0;
  let right = 0;
  let max = 0;
  let last = -1;
  let exist = false;

  for (let i = 0; i < len; i++) {
      if (nums[i] !== 1) {
          if (last !== i - 1) {
              if (left + right > max) {
                  max = left + right;
              }
              left = 0;
          }
          last = i;
          hash.set(last, [left, right]);
      } else {
          exist = true;
          if (last === -1) {
              left++;
          } else {
              right++;
              hash.set(last, [left, right]);
          }
          if (nums[i + 1] !== 1 && last !== -1) {
              if (left + right > max) {
                  max = left + right;
              }
              left = right;
              right = 0;
          }
      }
  }

  if (max === 0 && exist) {
      if (hash.has(0)) {
          return 1;
      }
      return len - 1;
  }

  return max;
};

/*
Problem Link:
  https://leetcode.com/problems/minimum-size-subarray-sum/
*/

var minSubArrayLen = function(target, nums) {
  let maxLen = Infinity;
  let currentSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    currentSum += nums[windowEnd];

    while (currentSum >= target) {
      const subarrayLength = windowEnd - windowStart + 1;
      if (subarrayLength < maxLen) {
        maxLen = subarrayLength;
      }
      currentSum -= nums[windowStart];
      windowStart++;
    }
  }

  return maxLen !== Infinity ? maxLen : 0;
};

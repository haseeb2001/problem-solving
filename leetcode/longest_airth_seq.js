/*
Problem Link:
 https://leetcode.com/problems/longest-arithmetic-subsequence/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestArithSeqLength = function(nums) {
  const n = nums.length;
  const dp = new Array(n).fill(0).map(() => new Map());

  let maxLen = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const len = dp[j].get(diff) || 1;
      dp[i].set(diff, len + 1);
      maxLen = Math.max(maxLen, len + 1);
    }

  }

  return maxLen;
};

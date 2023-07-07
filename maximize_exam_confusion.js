/*
Problem Link:
  https://leetcode.com/problems/maximize-the-confusion-of-an-exam/
*/


var maxConsecutiveAnswers = function(answerKey, k) {
  const len = answerKey.length;

  if (k >= len) {
    return len;
  }

  let maxLen = 0;
  let left = 0;
  let right = 0;
  let maxCount = 0;
  let record = new Map();
  record.set('T', 0);
  record.set('F', 0);

  while (right < len) {
    const currentChar = answerKey[right];
    record.set(currentChar, record.get(currentChar) + 1);
    maxCount = Math.max(maxCount, record.get(currentChar));

    if (right - left + 1 - maxCount > k) {
      const leftChar = answerKey[left];
      record.set(leftChar, record.get(leftChar) - 1);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }

  return maxLen;
};

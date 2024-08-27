/**
 * @param {string} s
 * @return {string}
 */

// brute force  code
// var longestPalindrome = function(s) {

//     if(s.length<2)
//        return s

//     let maxSub=""
//     let maxLen=-Infinity
//     function checkPalindrome(subStr){
//         let left=0
//         let right=subStr.length-1
//         while(left<right){
//             if(subStr[left]!=subStr[right]){
//               return false
//             }
//             left++
//             right--
//         }
//         return true
//     }
//     for(let i=0;i<s.length;i++){
//       for(let j=i;j<s.length;j++){
//           let subStr = s.substring(i, j+1);
//             if (checkPalindrome(subStr) && subStr.length > maxLen ) {
//
//                     maxLen = subStr.length;
//                     maxSub = subStr;
//
//             }
//         }
//     }

//     return maxSub
// };

// Two pointer approach

var longestPalindrome = function (s) {
  let n = s.length;
  let maxLen = 0;
  let start = 0;

  function ExpandAround(left, right) {
    if (left >= 0 && right < n && s[left] === s[right]) {
      left--;
      right++;
    }

    let len = right - left - 1;
    if (len > maxLen) {
      start = left + 1;
      maxLen = len;
    }
  }

  for (let i = 0; i < n; i++) {
    ExpandAround(i, i);
    ExpandAround(i, i + 1);

    return start.substring(start, start + maxLen);
  }
};

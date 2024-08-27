/**
 * @param {number[]} height
 * @return {number}
 */

// brute force method
// var maxArea = function(height) {
//  let n=height.length
//  let maxArea =-Infinity

//  for(let i =0; i<n;i++){
//     for(let j= i+1; j<n; j++ ){
//         let area= (j-i) * Math.min(height[i],height[j])

//         max= Math.max(area,maxArea)
//     }
//  }

//  return maxArea
// };

// Two pointer Approach
var maxArea = function (height) {
  let n = height.length;
  let L = 0;
  let R = n - 1;
  let maxArea = -Infinity;

  while (L < R) {
    let area = (R - L) * Math.min(height[L], height[R]);

    maxArea = Math.max(area, maxArea);
    if (height[L] < height[R]) {
      L++;
    } else {
      R--;
    }
  }
  return maxArea;
};

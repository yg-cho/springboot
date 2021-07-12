/**
 * @param {number[]} nums
 * @return {number}
 */
let numIdenticalPairs = function(nums) {
  let good = 0;
  for(let i=0;i<=nums.length-1;i++){
    for(let j=1;j<=nums.length;j++){
      if(nums[i] == nums[j]){
        good = good+1;
        console.log(nums[i],nums[j]);
      }
    }
  }
  return good;
};

let array = [1,2,3,1,1,3];

numIdenticalPairs(array);



// var numIdenticalPairs = function(nums) {
//   c = 0
//   for(let i = 0 ;i<nums.length-1;i++)  {
//       for(let j = i+1;j<nums.length;j++){
//             if(nums[i]===nums[j] && i<j){
//                 c+= 1
//             }
//       }
//   }
//   return c
// };

nums = [1,2,3,1,1,3]
// console.log(numIdenticalPairs(nums))
var numIdenticalPairs = function(nums) {
    map = {}
    let c= 0
    for(number of nums){
        if(map[number]===undefined){
            map[number] = 1
        }
        else{
            c += map[number]  // c = c+map[number]
            map[number] += 1
        }
    }
    return c
};

console.log(nums.__proto__.__proto__);
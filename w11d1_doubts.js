// arr = [9,8,5,6,3,1,9,9,9]
// max = -Infinity
// sec_max = -Infinity
// for(let i = 0;i<arr.length;i++){
//     if(max<arr[i]){
//         [max,sec_max] = [arr[i],max]
//     }
//     else if(arr[i]>sec_max && arr[i]!=max){
//         sec_max = arr[i]
//     }
    
// }
// console.log(max,sec_max);


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    // p1 = p2 = 0
    // // big = nums1.length>nums2.length?nums1.length:nums2.length;
    arr = []
    // while(p1<nums1.length && p2<nums2.length){
    //     if(nums1[p1]==nums2[p2]){
    //        arr.push(nums1[p1]) 
    //         p1+=1
    //         p2+=1
    //     }
    // }
    obj = {}
    for(let i=0;i<nums1.length;i++){
        if(!(nums1[i] in obj)){
            obj[nums1[i]] = 1
        }
        else{
            obj[nums1[i]] += 1
        }
    }
    console.log(obj)
    for(let i=0;i<nums2.length;i++){
        if(obj[nums2[i]]!=0 && obj[nums2[i]]!=undefined ){
            arr.push(nums2[i])
            obj[nums2[i]]-=1
        }
        
        
    }
    console.log(obj);
    return arr
    
};

nums1 = [4,9,5]
nums2 = [9,4,9,8,4]

console.log(intersect(nums1,nums2))
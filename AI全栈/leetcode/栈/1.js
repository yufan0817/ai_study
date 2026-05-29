//const arr = [1, 2, 3, 'a', 'b']

// push pop unshift shift 
//const a =1
//a = 2
//const a = {//只要a的引用地址改变了，就算改变了
    //age :18
//}
//a.age = 20
let nums1 = [1,2,3,0,0,0],m = 3,nums2 = [2,5,6],n = 3
var merge = function(nums1, m, nums2, n) {
    //两个指针分别指向末尾的有效值
    //取更大的值，从数组一的末尾往前填补
    let i = m - 1,j = n - 1,k = m + n - 1
    while (i >= 0 && j >= 0) {
    if ( nums1[i] >= nums2[j]){ //大值数组一
        nums1[k] = nums1[i]
        i--
        k--
       
    } else{//大值数组二
        nums1[k] = nums2[j]
        j--
        k--
    }
}
while(j >= 0) {//数组二还有值
    nums1[k] = nums2[j]
    j--
    k--
}
};
// 田忌赛马思路
function advantageCount(nums1, nums2) {
  let res = new Array(nums1.length);
  let l = 0, r = nums1.length - 1;
  let idx1 = new Array(nums1.length),idx2 = new Array(nums2.length);
  for(let i = 0; i < nums1.length; i++) {
    idx1[i] = idx2[i] = i
  }
  idx1.sort((a, b) => nums1[a] - nums1[b])
  idx2.sort((a, b) => nums2[b] - nums2[a])
  for(let i = 0; i < idx2.length; i++) {
    if(nums2[idx2[i]] >= nums1[idx1[r]]) {
      // 如果nums2的最优数 高于 nums1的最优数，肯定赢不了，则没必要硬碰硬
      // 所以牺牲nums1最差数（l指向） 来带走 nums2最优数
      res[idx2[i]] = nums1[idx1[l]];
      l ++;
    } else {
      // 如果nums1的最优数 大于 nums2的最优数，就硬碰硬，反正肯定能赢
      res[idx2[i]] = nums1[idx1[r]];
      r --;
    }
  }
  return res
};

console.log(advantageCount([12,24,8,32],[13,25,32,11]))

// 要求空间复杂度O(1)， 在入参数组自身进行操作

const reverse = function(nums, start, end) {
    while(start < end) {
        [nums[start++], nums[end--]] = [nums[end], nums[start]];
    }
}
const rotate = function(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};
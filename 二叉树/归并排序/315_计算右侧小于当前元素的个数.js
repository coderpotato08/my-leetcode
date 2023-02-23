function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;

}
function createTree(nums) {
  let root = null;
  let map = new Map();
  let res = [];
  for(let i = 0; i < nums.length; i++) {
    let node = new TreeNode(nums[i]);
    map.set(node.val, 0)
    if(!root) {
      root = node;
      continue;
    }
    let curNode = root;
    while(curNode) {
      if(nums[i] < curNode.val && curNode.left) {
        map.set(curNode.val, map.get(curNode.val) + 1)
        curNode = curNode.left;
      } else if (nums[i] < curNode.val) {
        map.set(curNode.val, map.get(curNode.val) + 1)
        curNode.left = node;
        break;
      }
      if(nums[i] > curNode.val && curNode.right) {
        map.
        curNode = curNode.right;
      } else if (nums[i] > curNode.val) {
        curNode.right = node;
        break;
      }
    }
  }
  for(const [key, value] of map) {
    res.push(value)
  }
  return res
}

console.log(createTree([5,2,6,1]))

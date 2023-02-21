// 中序遍历找得到num[i+1] < num[i]的两个点返回
// 在树中找到两个点，交换值
function recoverTree(root) {
  let nums = []
  inorder(root, nums);
  const [num1, num2] = find(nums);
  recover(root, 2, num1, num2);
  return root
};
function inorder(root, nums) {
  if (!root) return;
  inorder(root.left, nums);
  nums.push(root.val);
  inorder(root.right, nums);
}
function find(nums) {
  const len = nums.length;
  let index1 = -1, index2 = -1;
  for(let i = 0; i < len - 1; i++) {
    if(nums[i+1] < nums[i]) {
      index2 = i + 1;
      if(index1 === -1) {
        index1 = i
      } else {
        break;
      }
    }
  }
  return [nums[index1], nums[index2]];
}
function recover(root, c, x, y) {
  if(root) {
    if(root.val === x || root.val === y) {
      root.val = root.val === x ? y : x;
      if(--c === 0) {
        return;
      }
    }
    recover(root.left, c, x, y)
    recover(root.right, c, x, y)
  }
}

// 深度优先遍历，从根节点遍历到左节点，
// 直到不存在左节点，弹出，再访问右节点
function recoverTreeDFS(root) {
  const stack = []
  let x = null, y = null, pred = null;
  while(stack.length || root !== null) {
    while(root !== null) {
      stack.push(root);
      root = root.left
    }
    root = stack.pop();
    if(pred !== null && root.val < pred.val) {
      y = root;
      if(x === null) {
        x = pred
      } else break;
    }
    pred = root;
    root = root.right;
  }
  const temp = x.val;
  x.val = y.val;
  y.val = temp;
  return root
}

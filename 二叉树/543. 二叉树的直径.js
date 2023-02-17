function diameterOfBinaryTree(root) {
  let res = 0;
  function traverse(root) {
    if (!root) return 0;
    let leftMax = traverse(root.left);
    let rightMax = traverse(root.right);
    res = Math.max(res, leftMax + rightMax)
    return Math.max(leftMax, rightMax) + 1;
  }
  traverse(root);
  return res;
};

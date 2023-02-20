function flatten(root) {
  if (!root) return null;
  flatten(root.left);
  flatten(root.right);
  // 后序遍历处理左右子树合并
  let leftNode = root.left, rightNode = root.right, p = root;
  root.left = null;
  root.right = leftNode;
  while(p.right) {
    p = p.right;
  }
  p.right = rightNode;
  return root
};

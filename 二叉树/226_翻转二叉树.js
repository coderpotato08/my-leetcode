function invertTree1(root) { // 分解问题
  if(!root) return null;
  let temp = root.left;
  root.left = invertTree1(root.right);
  root.right = invertTree1(temp);
  return root
};

function invertTree2(root) { // 遍历
  if(!root) return null;
  [root.left, root.right] = [root.right, root.left];
  invertTree2(root.left);
  invertTree2(root.right);
  return root
};

function countNodes(root) {
  let l = root, r = root;
  let hl = 0, hr = 0;
  if(!root) return 0;
  while(l) {
    l = l.left;
    hl ++;
  }
  while(r) {
    r = r.right;
    hr ++;
  }
  if(hl == hr) {  // 满二叉树
    return Math.pow(2, hl) - 1;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);  // 完全（普通）二叉树
};

function lowestCommonAncestor(root, p, q) {
  if(!root) return null;
  if(root.val === p.val || root.val === q.val) {
    return root
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if(left && right) {
    return root
  }
  return left !== null ? left : right
};

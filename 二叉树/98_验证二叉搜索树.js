function isValidBST(root) {
  return traverse(root, -Infinity, Infinity)
};
function traverse(root, lower, upper) {
  if(!root) return true;
  if(root.val <= lower || root.val >= upper) return false;
  return traverse(root.left, lower, root.val) && traverse(root.right, root.val,upper)
}

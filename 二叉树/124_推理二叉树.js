function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var deduceTree = function(preorder, inorder) {
  if (preorder.length <= 0 || inorder.length <= 0) {
      return null
  }
  let i = inorder.findIndex((val) => val === preorder[0]);
  let lInorder = inorder.slice(0,i), rInorder = inorder.slice(i+1);
  return new TreeNode(
      preorder[0],
      deduceTree(preorder.slice(1, i + 1), lInorder),
      deduceTree(preorder.slice(i + 1), rInorder)
  )
};
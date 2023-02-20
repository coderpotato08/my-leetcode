function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

let inorderMap = new Map();

function buildTree(preorder, inorder) {
  for(let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i)
  }
  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};
function build(preorder, preStart, preEnd, inorder, inStart, inEnd) {
  if (preStart > preEnd) {
    return null;
  }
  let rootVal = preorder[preStart];
  let index = inorderMap.get(rootVal);  // 当前root节点在中序遍历中的位置；
  let leftSize = index - inStart;
  let root = new TreeNode(rootVal);
  root.left = build(preorder, preStart + 1, preStart + leftSize, inorder, inStart, index - 1);
  root.right = build(preorder, preStart + leftSize + 1, preEnd, inorder, index + 1, inEnd);
  return root;
}

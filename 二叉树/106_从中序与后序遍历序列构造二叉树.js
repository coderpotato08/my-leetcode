function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
let inorderMap = new Map();
function buildTree(inorder, postorder) {
  for(let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }
  return build(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};
function build(inorder, inStart, inEnd, postorder, postStart, postEnd) {
  if(inStart > inEnd) return null;
  let rootVal = postorder[postEnd];
  let index = inorderMap.get(rootVal);
  let leftSize = index - inStart;
  let root = new TreeNode(rootVal);
  root.left = build(inorder, inStart, index - 1, postorder, postStart, postStart + leftSize - 1);
  root.right = build(inorder, index + 1, inEnd, postorder, postStart + leftSize, postEnd - 1)
  return root
}

console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]))

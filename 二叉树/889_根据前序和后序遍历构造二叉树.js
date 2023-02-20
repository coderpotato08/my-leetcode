function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
let postorderMap = new Map()
function constructFromPrePost(preorder, postorder) {
  for(let i = 0; i < postorder.length; i++) {
    postorderMap.set(postorder[i], i);
  }
  return build(preorder, 0, preorder.length - 1, postorder, 0, postorder.length - 1);
};

function build(preorder, preStart, preEnd, postorder, postStart, postEnd) {
  if(preStart > preEnd) return null;
  if(preStart === preEnd) return new TreeNode(preorder[preStart]);
  let rootVal = preorder[preStart];
  let leftRootVal = preorder[preStart + 1];
  let index = postorderMap.get(leftRootVal);
  let root = new TreeNode(rootVal);
  let leftSize = index - postStart + 1;
  root.left = build(preorder, preStart + 1, preStart + leftSize, postorder, postStart, postStart + leftSize - 1);
  root.right = build(preorder, preStart + leftSize + 1, preEnd, postorder, postStart + leftSize, postEnd);
  return root
}

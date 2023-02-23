// 利用搜索二叉树中序遍历升序，左子树节点小于当前节点，右子树节点大于当前节点的特性
// 将中序遍历反过来 便是降序遍历
// 降序遍历每个节点，求出大于它当前节点和当前节点值的和
function convertBST(root) {
  let sum = 0
  function traverse(root) {
    if(!root) return;
    traverse(root.right);
    sum += root.val;
    root.val = sum;
    traverse(root.left);
  }
  traverse(root);
  return root
};

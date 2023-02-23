// 利用搜索二叉树 中序遍历 升序的特性
function kthSmallest(root, k) {
  let res;
  let num = 0;
  function traverse(root) {
    if(!root) return;
    traverse(root.left);
    num ++;
    if (num == k) {
      res = root.val;
      return;
    }
    traverse(root.right);
  }
  traverse(root)
  return res
};

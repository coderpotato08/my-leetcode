
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * 动态 + 二叉树后续遍历
 * dp项含义，为一个二维数组[dp[0], dp[1]]分别表示偷和不偷的最大金额
 * 递推公式：
 * dp[0]偷 = currentNode.val + leftDp[1](左不偷) + rightDp[1](右不偷)
 * dp[1]不偷 = max(leftDp[0], leftDp[1]) + max(rightDp[0], rightDp[1]) 左右偷或不偷的最大值
 * 初始化 节点为null时dp为 [0,0]
 * 遍历：因为当前节点的计算需要用到子树的最大值，所以采用后续遍历
 */
var rob = function(root) {
  const result = robTree(root);
  return Math.max(result[0], result[1])
};
var robTree = function (node) {
  if(node == null) return [0, 0];
  const leftDp = robTree(node.left);
  const rightDp = robTree(node.right);
  const val1 = Math.max(leftDp[0], leftDp[1]) + Math.max(rightDp[0], rightDp[1])// 不偷
  const val2 = node.val + leftDp[1] + rightDp[1]// 偷
  return [val2, val1]
}
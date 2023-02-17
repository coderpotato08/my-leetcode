const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}

function findLeaves(root) {
  let res = [];
  while (root) {
    let list = [];
    root = traverse(root, list);
    res.push(list)
  }
  return res
}
function traverse(root, list) {
  if(!root) return null;
  // 如果非叶子节点，返回当前节点，叶子节点则返回null
  // root的左右子树重新赋值位traverse后的结果，这样可以剔除叶子节点
  if(!root.left && !root.right) {
    list.push(root.val);
    return null;
  }
  root.left = traverse(root.left, list);
  root.right = traverse(root.right, list);
  return root;
}

console.log(findLeaves(root))

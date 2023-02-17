const {staticRoot} = require("./index")
function DFS(root) {
  let res = []
  function traverse(root, res) {
    if(!root) return;
    res.push(root.val)  //前序遍历
    traverse(root.left, res);
    // res.push(root.val)  //中序遍历
    traverse(root.right, res);
    // res.push(root.val)  //后序遍历
  }
  traverse(root, res);
  return res
}
console.log("DFS：", BFS(staticRoot));

function BFS(root) {
  let stack = [], res = [];
  stack.push(root);
  while(stack.length) {
    // 如果题目不需要记录步数，可以把
    for(let i = 0; i < stack.length; i++) {
      let node = stack.shift();
      res.push(node.val);
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
  }
  return res;
}

console.log("BFS：", DFS(staticRoot));

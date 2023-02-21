function findDuplicateSubtrees(root) {
  let map = new Map();
  let res = [];
  function traverse(root) {
    if(!root) return "#";
    const left = traverse(root.left);
    const right = traverse(root.right);
    const str = `${left},${right},${root.val}`
    if (map.get(str) == 1) {
      res.push(root)
    }
    map.set(str, map.has(str) ? map.get(str) + 1 : 1)
    return str
  }
  traverse(root)
  return res
};

function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function serialize(root) {
  let str = "";
  function traverse(root) {
    if(!root) {
      str += "#,"
      return;
    }
    str += `${root.val},`;
    traverse(root.left);
    traverse(root.right);
  }
  traverse(root)
  return str
};

function deserialize(data) {
  const dataArr = data.split(",");
  function rdeserialize(dataList) {
    if(dataList[0] === "#") {
      dataList.shift();
      return null;
    }
    const root = new TreeNode(parseInt(dataList[0]));
    dataList.shift();
    root.left = rdeserialize(dataList);
    root.right = rdeserialize(dataList);
    return root
  }
  return rdeserialize(dataArr);
};


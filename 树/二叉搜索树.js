function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function SearchTree() {
  this.root = null;
  this.insert = function (value) {
    const node = new TreeNode(value)
    if (!this.root) {
      this.root = node;
      return true;
    }
    let curNode = this.root
    while (curNode) {
      if (node.value < curNode.value && curNode.left) {
        curNode = curNode.left
      } else if (node.value < curNode.value) {
        curNode.left = node;
        return true;
      }
      if (node.value > curNode.value && curNode.right) {
        curNode = curNode.right;
      } else if (node.value > curNode.value) {
        curNode.right = node;
        return true;
      }
    }
  }
  this.remove = function (value) {
    this.root = this.removeNode(this.root, value);
  }
  this.removeNode = function(node, value) {
    if (node === null) {
      return null;
    }
    if (node.value === value) {
      // 没有子节点的情况
      if (!node.left && !node.right) {
        return null;
      }
      // 没有左子节点情况
      if (!node.left) {
        return node.right
      }
      // 没有右子节点情况
      if (!node.right) {
        return node.left
      }
      // 左右子节点都存在，寻找右子树的最小值
      // 删除节点值与右子树最小值替换，并删除右子树最小节点
      let rightSuccessor = this.getSmallest(node.right);
      node.value = rightSuccessor.value;
      node.right = this.removeNode(node.right, rightSuccessor.value);
      return node;
    } else if (node.value < value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else if (node.value > value) {
      node.left = this.removeNode(node.left, value);
      return node;
    }
  }
  this.getSmallest = function (root) {
    while(root.left) {
      root = root.left
    }
    return root;
  }
}

const testTree = new SearchTree();
testTree.insert(10);
testTree.insert(6);
testTree.insert(15);
testTree.insert(4);
testTree.insert(8);
testTree.insert(17);
testTree.insert(3);
testTree.insert(7);
testTree.insert(9);

testTree.remove(6);

console.log(testTree.root);

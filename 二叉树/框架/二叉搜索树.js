const notBST = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 8,
      left: null,
      right: {
        val: 12,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 13,
    left: null,
    right: null,
  },
}

function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function SearchTree() {
  this.root = null;
  // 二搜索叉树插入
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
  // 二叉搜索树删除
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
  // 验证二叉搜索树
  this.isValidBST = function(root, min, max) {
    if(!root) return true;
    if(min && root.val > min.val) return false;
    if(max && root.val < max.val) return false;
    return this.isValidBST(root.left, min, root) && this.isValidBST(root.right, root, max)
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

console.log(testTree.isValidBST(notBST, null, null));

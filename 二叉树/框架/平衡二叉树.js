function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BTree() {
  this.root = null;
  //
  /*    LL 右旋
  *     5
  *    /
  *   4      ==>   4
  *  /            / \
  * 3            3   5
  * */
  this.LLHandle = function(node) {
    let root = node.left;
    node.left = root.right;
    root.right = node;
    return root
  }
  /*    RR 左旋
  * 3
  *  \
  *   4      ==>   4
  *    \          / \
  *     5        3   5
  * */
  this.RRHandle = function(node) {
    let root = node.right;
    node.right = root.left;
    root.left = node;
    return root
  }
  // LR 当前节点左子树添加右节点后不平衡
  // 先对左子树左旋，在对当前节点树右旋
  /*
  *   5         5
  *  /         /
  * 4   ==>   6   ==>  6
  *  \       /        / \
  *   6     4        4   5
  * */
  this.LRHandle = function(node) {
    node.left = this.RRHandle(node.left);
    return this.LLHandle(node);
  }
  // RL 当前节点右子树添加左节点后不平衡
  // 先对右子树右旋，在对当前节点树左旋
  /*
  *   3         3
  *    \         \
  *     5   ==>   4   ==>  4
  *    /           \      / \
  *   4             5    3   5
  * */
  this.RLHandle = function(node) {
    node.right = this.LLHandle(node.right);
    return this.RRHandle(node);
  }
  this.addNode = function(value) {
    let r = this.findNode(this.root, value);
    if (r[0]) {
      return this.root
    }
    const node = new TreeNode(value)
    if (!r[1]) {
      return node;
    } else {
      let flag = value < r[1].value ? "left" : "right";
      r[1][flag] = node;
      return this.adjustTree();
    }
  };
  this.adjustTree = function() {
    if (!this.root) return null;
    this.root.left = this.adjustNode(this.root.left);
    this.root.right = this.adjustNode(this.root.right);
    return this.adjustNode(this.root);
  }
  this.adjustNode = function(node) {
    if (!node) return null;
    let ld = this.getDepth(node.left);
    let rd = this.getDepth(node.right);
    if (ld > rd + 1) {  // 左子树高度大于右子树高度，且高度差超过1
      let temp = node.left;
      let templd = this.getDepth(temp.left);
      let temprd = this.getDepth(temp.right);
      if (templd < temprd) {
        return this.LRHandle(node)
      } else {
        return this.LLHandle(node)
      }
    } else if (rd > ld + 1) { // 右子树高度大于左子树高度，且高度差超过1
      let temp = node.right;
      let templd = this.getDepth(temp.left);
      let temprd = this.getDepth(temp.right);
      if (templd < temprd) {
        return this.RRHandle(node)
      } else {
        return this.RLHandle(node)
      }
    } else {
      return this.root;
    }
  };
  // 查找节点
  this.findNode = function(node, value) {
    if(!node) return [false, null];
    if(value === node.value) {
      return [true, node]
    } else if (value < node.value) {
      if (!node.left) {
        return [false, node]
      }
      return this.findNode(node.left, value)
    } else if (value > node.value) {
      if (!node.right) {
        return [false, node]
      }
      return this.findNode(node.right, value)
    }
  }
  // 获取节点高度
  this.getDepth = function(node) {
    if (!node) return 0;
    let ld = this.getDepth(node.left);
    let rd = this.getDepth(node.right);
    return 1 + (ld > rd ? ld : rd);
  }
}

const testTree = new BTree();
// const nodes = [10,5,8,4,6,7,9,3];
testTree.root = testTree.addNode(10);
testTree.root = testTree.addNode(5);
testTree.root = testTree.addNode(8);

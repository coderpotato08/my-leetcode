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

function connect(root) {
  if (root === null) {
    return root
  }
  let stack = [root];
  while(stack.length > 0) {
    const size = stack.length
    for(let i = 0; i < size; i++) {
      let node = stack.shift();
      if (i < size - 1) {
        node.next = stack[0];
      }
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
  }
  return root
};

console.log(connect(root))

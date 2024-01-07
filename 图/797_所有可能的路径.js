/**
 * 给你一个有 n 个节点的 有向无环图（DAG），请你找出所有从节点 0 到节点 n-1 的路径并输出（不要求按特定顺序）
 * graph[i] 是一个从节点 i 可以访问的所有节点的列表（即从节点 i 到节点 graph[i][j]存在一条有向边）。
 */
const allPathsSourceTarget = function(graph) {
  let res = [];
  const traverse = function(s, path) {
      path.push(s);
      if(s == graph.length-1){
          res.push([...path]);
      }
      for(ss of graph[s]) {
          traverse(ss, path);
      }
      path.pop()
  }
  traverse(0, []);
  return res
};

console.log(allPathsSourceTarget([[1,2],[3],[3],[]]))
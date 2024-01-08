// 拓扑排序 边=>被依赖关系 拓扑排序
const findOrder = function(numCourses, prerequisites) {
  let hasCycle = false
  const graph = new Array(numCourses).fill().map(()=>[]);
  for(edge of prerequisites) {
      graph[edge[1]].push(edge[0])
  }
  const postorder = []
  const onPath = new Array(numCourses).fill(false)
  const visited = new Array(numCourses).fill(false)
  const traverse = function(s) {
      if(onPath[s]) hasCycle=true;
      if(hasCycle || visited[s]) return;
      onPath[s]=true;
      visited[s]=true;
      for(t of graph[s]) {
          traverse(t)
      } 
      postorder.push(s);
      onPath[s]=false;
  }
  for(let i=0; i<numCourses; i++) {
      traverse(i)
  }
  return hasCycle ? [] : postorder.reverse()
};

// 判断入度为0
// 环的所有节点都存在入度，因此环的节点不会进入zeroStack 0入度队列
// 所以存在环的图所遍历的0入度节点一定小于总的节点个数
const findOrder = function(numCourses, prerequisites) {
  const result = [];
  if(numCourses == 0) return [];
  if(!prerequisites || prerequisites.length == 0) {
      for(let i=0; i<numCourses; i++) {
          result[i] = i
      }
      return result;
  }
  // 每个节点的入度表，节点入度为0则可以上完此课
  const indegree = new Array(numCourses).fill(0);
  const zeroStack = [];   //0入度队列
  const graph = new Array(numCourses).fill().map(()=>[]);
  // 构建入度表和依赖图，减入度时需要找到指定依赖
  for(edge of prerequisites) {
      indegree[edge[0]]++
      graph[edge[1]].push(edge[0])
  }
  for(let i=0; i<numCourses; i++) {
      if(indegree[i] == 0) zeroStack.push(i)
  }
  while(zeroStack.length) {
      const cur = zeroStack.shift();
      result.push(cur);
      const depend = graph[cur];
      for(t of depend) {
          indegree[t] --;
          if(indegree[t]==0) zeroStack.push(t)
      }
  }
  return result.length == numCourses ? result : []
};
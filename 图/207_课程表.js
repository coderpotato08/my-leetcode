/**
 * 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
 * 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
 * 
 * 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
 * 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。
 */

/**
 * 输入：numCourses = 2, prerequisites = [[1,0]]
 * 输出：true
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
 */

// 有向图 思路：环检测

const canFinish = function(numCourses, prerequisites) {
  let hasCycle = false
  const g = new Array(numCourses).fill().map(()=>[]);
  const onPath = new Array(numCourses).fill(false);
  const visited = new Array(numCourses).fill(false);
  for(edge of prerequisites) {
      g[edge[1]].push(edge[0])
  }
  console.log(g)
  const traverse = function(graph, s) {
      if(onPath[s]) {
         hasCycle = true 
      }
      if(visited[s] || hasCycle) return;
      onPath[s] = true;
      visited[s] = true;
      for(t of graph[s]) {
          traverse(graph, t);
      }
      onPath[s] = false
  }
  for(let i=0; i<numCourses; i++) {
      traverse(g, i)
  }
  return !hasCycle
};

console.log(canFinish(10, [[3,0],[3,1],[6,3],[7,3],[5,4],[9,5],[9,7]]))
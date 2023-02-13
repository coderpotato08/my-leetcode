function carPooling(trips, capacity) {
  let diff = new Array(1001).fill(0);
  let res = new Array(1001).fill(0);
  for(let i = 0; i < trips.length; i++) {
    const[numP, from, to] = trips[i];
    diff[from] += numP;
    diff[to] -= numP
  }
  res[0] = diff[0]
  for(let i = 1; i < diff.length; i++) {
    res[i] = res[i-1] + diff[i]
  }
  return res.every((i) => i <= capacity)
};
console.log(carPooling([[2,1,5],[3,3,7]], 4))

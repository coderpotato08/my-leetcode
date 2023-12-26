const merge = function(intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let i = 0, temp, res = [];
    while(i < intervals.length) {
        const cur = intervals[i];
        if(!temp) {
            temp = cur;
            i++;
            continue;
        }
        if(cur[0] <= temp[1] && cur[1] > temp[1]) {
            temp = [temp[0], cur[1]];
            i++
        } else if(cur[1] <= temp[1]) {
            i++
            continue;
        } else {
            res.push(temp);
            temp = cur;
            i++
        }
    }
    temp && res.push(temp);
    return res
};

console.log(merge([[1,3],[8,10],[2,6],[15,18]]))
console.log(merge([[1,4],[8,4]]))
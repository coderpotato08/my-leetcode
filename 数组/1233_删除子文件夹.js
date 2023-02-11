function removeSubfolders(folder) {
  folder.sort();
  const result = [folder[0]]
  for(let i = 1;i < folder.length; ++i) {
    let pre = result[result.length - 1], preLen = pre.length;
    if(!(preLen < folder[i].length && pre === (folder[i].substring(0, preLen)) && folder[i].charAt(preLen) === "/")) {
      result.push(folder[i])
    }
  }
  return result;
};

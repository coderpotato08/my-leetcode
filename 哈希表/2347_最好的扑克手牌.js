function bestHand(ranks, suits) {
  let map = new Map();
  for(let i = 0; i < ranks.length; i++) {
    map.set(ranks[i], (map.has(ranks[i]) ? [...map.get(ranks[i]),suits[i]] : [suits[i]]))
  }
  if(suits.every(suit => suit === suits[0])) return "Flush";
  if(map.size === 5) return "High Card"
  for(const[key, value] of map) {
    if(value.length > 2) {
      return "Three of a Kind"
    }
  }
  return "Pair"
};

console.log(bestHand([13,2,3,1,9], ["a","a","a","a","a"]));

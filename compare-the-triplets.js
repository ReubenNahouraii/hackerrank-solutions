function compare(a, b) {
  if(a === b) return 0;

  return Math.max(a,b);
}

function solve(a0, a1, a2, b0, b1, b2){
  let alice = 0,
    bob = 0,
    winner;

  [[a0,b0], [a1,b1], [a2,b2]].forEach(arr => {
    if(!(winner = compare(arr[0], arr[1]))) return;
    if(winner === arr[0])
      alice++
    else
      bob++
  })

  return [alice, bob]
}


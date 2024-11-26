function nextPassword(curr: string) {
  while (!check(curr)) {
    curr = increment(curr);
  }
  return curr;
}

function increment(str: string, index: number = 7) {
  const letters = [...str];
  let charCode = letters[index].charCodeAt(0);
  if (charCode + 1 > 122) {
    letters[index] = String.fromCharCode(97);
    return increment(letters.join(""), index - 1);
  }
  letters[index] = String.fromCharCode(charCode + 1);
  return letters.join("");
}

function check(str: string) {
  if (str.includes("i") || str.includes("o") || str.includes("l")) return false;
  const pairs = new Set();
  let hasIncreasingStraight = false;
  for (let i = 0; i < str.length - 2; i++) {
    const [first, second, third] = str.slice(i, i + 3);
    const [firstCode, secondCode, thirdCode] = [
      first.charCodeAt(0),
      second.charCodeAt(0),
      third.charCodeAt(0),
    ];
    if (firstCode === secondCode - 1 && firstCode === thirdCode - 2)
      hasIncreasingStraight = true;
    if (firstCode === secondCode || secondCode === thirdCode)
      pairs.add(secondCode);
  }
  return hasIncreasingStraight && pairs.size === 2;
}

console.log(nextPassword(increment("vzbxxyzz")));

// console.log(String.fromCharCode("a".charCodeAt(0) + 1));
// console.log("z".charCodeAt(0));

function main(str: string) {
  for (let i = 0; i < 50; i++) {
    let temp = str;
    str = lookAndSay(temp);
  }
  console.log(`Length of ${str.length}.`);
}

function lookAndSay(str: string): string {
  let result: string = "";
  let count: number = 0;
  let current: string = str[0];
  for (const char of str) {
    if (char === current) count++;
    else {
      result += `${String(count)}${current}`;
      current = char;
      count = 1;
    }
  }
  result += `${String(count)}${current}`;
  return result;
}

main("1113222113");

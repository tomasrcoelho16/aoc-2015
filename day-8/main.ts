let literal_count = 0;
let encoded_count = 0;
async function main() {
  const strings = await readFile();
  for (let input of strings) {
    chars_count(input);
  }
  console.log(encoded_count - literal_count);
}

function chars_count(input: string) {
  let literal = 2;
  let encoded = 6;
  for (let i = 1; i < input.length - 1; i++) {
    if (input[i] == "\\") {
      encoded++;
    } else if (input[i] == '"') encoded++;
    literal++;
    encoded++;
  }
  literal_count += literal;
  encoded_count += encoded;
}

async function readFile(): Promise<string[]> {
  let file = Bun.file("input.txt");
  let strings = await file.text();
  return strings.split("\n");
}

main();

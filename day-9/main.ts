async function main() {
  let parts = await readFile();
  const re = new RegExp(
    /(?<fcity>[a-zA-Z]*) to (?<scity>[a-zA-Z]*) = (?<dist>[0-9]*)/,
  );
  console.log(parts);
  for (let part of parts) {
    let expr = re.exec(part);
    if (expr) {
      console.log(expr.groups);
    }
  }
}

async function readFile(): Promise<string[]> {
  let file = Bun.file("input.txt");
  let parts = (await file.text()).split("\n");
  return parts;
}

main();

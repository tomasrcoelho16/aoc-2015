import { RegGroup } from "./types";

let values = {};

async function main() {
  let lines: string[] = [];

  try {
    lines = await readFile();
  } catch (e) {
    console.error("Error reading file.");
    process.exit(1);
  }

  const re = new RegExp(
    /((?<not>NOT) )?(?<leftOperand>[a-z0-9]*) ((?<logic>AND|OR|LSHIFT|RSHIFT) )?((?<rightOperand>[a-z0-9]*) )?-> (?<out>[a-z]*)/,
  );

  while (lines.length != 0) {
    const tempLines: string[] = [];
    for (let i = 0; i < lines.length; i++) {
      let parts = re.exec(lines[i]);
      if (parts) {
        if (!execCmd(parts.groups as RegGroup)) tempLines.push(lines[i]);
      }
    }
    lines = tempLines;
  }
  console.log(values["a"]);
}

function execCmd(cmd: RegGroup): boolean {
  const { leftOperand, out, logic, not, rightOperand } = cmd;

  let leftValue = values[leftOperand] ?? parseInt(leftOperand);

  if (isNaN(leftValue)) return false;

  leftValue = uint16(leftValue);

  let rightValue = rightOperand
    ? (values[rightOperand] ?? parseInt(rightOperand))
    : undefined;

  if (not) {
    values[out] = uint16(~leftValue);
    return true;
  }

  if (logic) {
    if (isNaN(rightValue)) return false;
    rightValue = uint16(rightValue);
    switch (logic) {
      case "AND":
        values[out] = leftValue & rightValue;
        return true;
      case "OR":
        values[out] = leftValue | rightValue;
        return true;
      case "RSHIFT":
        values[out] = leftValue >> rightValue;
        return true;
      case "LSHIFT":
        values[out] = leftValue << rightValue;
        return true;
    }
  }
  values[out] = leftValue;
  return true;
}

function uint16(n: number) {
  return n & 0xffff;
}

async function readFile(): Promise<string[]> {
  const file = Bun.file("input.txt");
  const txt_content = await file.text();
  const lines = txt_content.split("\n");
  return lines;
}

main();

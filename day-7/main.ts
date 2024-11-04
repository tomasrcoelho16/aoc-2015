async function main() {
  const file = Bun.file("input.txt");
  const txt_content = await file.text();
  const lines = txt_content.split("\n");
  const re = new RegExp(
    /((?<not>NOT) )?((?<numberLeft>[1-9]*)|(?<leftOperand>[a-z]*)) ((?<logic>AND|OR|LSHIFT|RSHIFT) )?(((?<numberRight>[1-9]*)|(?<rightOperand>[a-z]*)) )?-> (?<out>[a-z]*)/,
  );
  for (var line of lines) {
    console.log(line);
  }
}

main();

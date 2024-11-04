function main() {
  const path = "input.txt";
  const file = Bun.file(path);
  const re = new RegExp(
    /((?<not>NOT) )?((?<numberLeft>[1-9]*)|(?<leftOperand>[a-z]*)) ((?<logic>AND|OR|LSHIFT|RSHIFT) )?(((?<numberRight>[1-9]*)|(?<rightOperand>[a-z]*)) )?-> (?<out>[a-z]*)/,
  );
}

main();

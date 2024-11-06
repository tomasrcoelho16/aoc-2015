let literal_count = 0;
let memory_count = 0;
async function main() {
  const strings = await readFile();
  console.log('haxzsa"zcn"y"foclgtjfcnv"m\x68krc');
  // for (let input of strings) {
  //   memory_count += input.length;
  //   const result = chars_count(input);
  // }
}

// function chars_count(input: string) {
//   let backlash = input.indexOf("\\");
//   if(!backlash){
//     literal_count = input.length;
//     memory_count = input.length - 2;
//   }
//   while (input) {
//     if (backlash) {
//       switch (input[backlash + 1]) {
//         case "\\":
//           literal_count =
//       }
//     }
//   }
// }

async function readFile(): Promise<string[]> {
  let file = Bun.file("input.txt");
  let strings = (await file.text()).split("\n");
  return strings;
}

main();

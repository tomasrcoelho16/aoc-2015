import type { Flight } from "./utils";

let routes: Flight[] = [];
let cities: string[] = [];

async function main() {
  let parts = await readFile();
  toRoute(parts);
  let possibilities: [string[], number][] = [[[cities[7]], 0]];

  for (let i = 0; i < cities.length - 1; i++) {
    let temp: [string[], number][] = [];
    for (let possibility of possibilities) {
      temp.push(...newPossibilities(possibility));
    }
    possibilities.push(...temp);
    possibilities = possibilities.filter((a) => a[0].length == i + 2);
  }

  possibilities.sort((a, b) => b[1] - a[1]);

  console.log(possibilities[0]);
}

function newPossibilities(possibility: [string[], number]) {
  const news: [string[], number][] = [];
  let [visited, distance] = possibility;
  const lastVisited = visited[visited.length - 1];

  for (const route of routes) {
    const { origin, end, dist: routeDist } = route;
    const rules = [origin, end];
    const found = rules.indexOf(lastVisited);
    if (found !== -1 && !visited.includes(rules[found ? 0 : 1])) {
      news.push([
        [...visited, rules[found ? 0 : 1]],
        distance + Number(routeDist),
      ]);
    }
  }

  return news;
}

function toRoute(parts: string[]) {
  const re = new RegExp(
    /(?<origin>[a-zA-Z]*) to (?<end>[a-zA-Z]*) = (?<dist>[0-9]*)/,
  );

  for (let part of parts) {
    let expr = re.exec(part);
    if (expr) {
      let aux = expr.groups as unknown as Flight;
      routes.push(aux);
      if (!cities.includes(aux.origin)) cities.push(aux.origin);
      if (!cities.includes(aux.end)) cities.push(aux.end);
    }
  }
}

async function readFile(): Promise<string[]> {
  let file = Bun.file("input.txt");
  let parts = (await file.text()).split("\n");
  return parts;
}

main();

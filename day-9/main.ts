import type { Flight } from "./utils";

async function main() {
  let parts = await readFile();

  let routes: Flight[] = toRoute(parts);

  routes.sort((a, b) => a.dist - b.dist);

  let visited_cities: string[] = [];
  let distance = 0;
  for (let flight of routes) {
    let { fcity, scity, dist } = flight;
    if(visited_cities.includes(fcity))
  }
}

function toRoute(parts: string[]): Flight[] {
  let routes: Flight[] = [];

  const re = new RegExp(
    /(?<fcity>[a-zA-Z]*) to (?<scity>[a-zA-Z]*) = (?<dist>[0-9]*)/,
  );

  for (let part of parts) {
    let expr = re.exec(part);
    if (expr) {
      routes.push(expr.groups as unknown as Flight);
    }
  }

  return routes;
}

async function readFile(): Promise<string[]> {
  let file = Bun.file("input.txt");
  let parts = (await file.text()).split("\n");
  return parts;
}

main();

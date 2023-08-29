class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {}
}

const sorter = new Sorter([3, 2, 1]);
sorter.sort();
console.log(sorter.collection);

"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() { }
}
const sorter = new Sorter([3, 2, 1]);
sorter.sort();
console.log(sorter.collection);

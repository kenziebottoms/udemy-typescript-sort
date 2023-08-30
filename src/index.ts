import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const sorter = new Sorter(new NumbersCollection([3, 2, 1]));
sorter.sort();
console.log(sorter.collection);

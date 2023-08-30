import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const sorter = new Sorter(new NumbersCollection([3, 2, 1]));
sorter.sort();
console.log(sorter.collection);

const charSorter = new Sorter(new CharactersCollection('asdf'));
charSorter.sort();
console.log(charSorter.collection);

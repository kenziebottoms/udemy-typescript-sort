import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const sorter = new Sorter(new NumbersCollection([3, 2, 1]));
sorter.sort();
console.log(sorter.collection);

const charSorter = new Sorter(new CharactersCollection('asdf'));
charSorter.sort();
console.log(charSorter.collection);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(3);
linkedList.add(1);

const linkSorter = new Sorter(linkedList);
linkSorter.sort();
linkedList.print();

import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

const numbers = new NumbersCollection([3, 2, 1]);
numbers.sort();
console.log(numbers.data);

const chars = new CharactersCollection('asdf');
chars.sort();
console.log(chars.data);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(3);
linkedList.add(1);

linkedList.sort();
linkedList.print();

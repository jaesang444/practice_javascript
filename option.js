import { board } from './product.js';
import { allBoard } from './allBoard.js';
import { recViewed } from './recViewed.js';

let now = document.getElementById('options');
let data = ['Recently viewed', 'General', 'Product', '+ add section'];

const ul = document.createElement('ul');

for(let i = 0;i<data.length - 1; i++){
  const li = document.createElement('li');
  li.id=String(i);
  li.className = 'section-item';
  const a = document.createTextNode(data[i]);
  li.append(a);
  ul.append(li);
}
now.append(ul);

function makeTree(id, data) {
  const f = document.getElementById(id);
  const fu = document.createElement('ul');
  for(let i = 0;i<data.length;i++){
    const li = document.createElement('li');
    const d = document.createTextNode(data[i]);
    console.log(data[i]);
    li.append(d);
    fu.append(li);
  }
  f.append(fu);
}

makeTree(0, recViewed.item);
makeTree(1, allBoard.item);
makeTree(2, board.item);

import { addBoard } from './bottomRight.js';

const root = document.getElementById('bottom-left');
root.appendChild(document.createElement('ul'));
const now = root.lastChild;

initBottomLeft();

function initBottomLeft(){
  for(let i = 0;i<sections.length;i++){
    addSec(i);
    for(let j = 0;j<data[sections[i]].main.length;j++) {
      addDesc(i, j);
    }
  }
  const button = document.createElement('button');
  const add = document.createTextNode("+ add section");
  button.append(add);
  root.append(button);
  button.addEventListener('click', onClickAddSection);
}

function onClickAddSection(){
  const section = prompt('main');
  sections.push(section);
  addSec(sections.length-1);
  addBoard(sections.length-1);
  data[section] = { };
  data[section].main = [];
  data[section].sub = [];
}


function addSec(idx) {
  const li = document.createElement('li');
  li.id = "bls" + idx+"";
  li.className = 'section-item';
  const tmp = document.createTextNode(sections[idx]);
  li.append(tmp);
  li.append(document.createElement('ul'));
  now.append(li);
}

export function addDesc(idx1, idx2) {
  const section = document.getElementById("bls"+ idx1 + "");
  const button = document.createElement('button');
  const ul = section.firstElementChild;
  const li = document.createElement('li');
  li.id= "bld" + (idx1+"") + (idx2 + "");
  ul.className="items"
  button.className = "plain";
  const desc = document.createTextNode(data[sections[idx1]].main[idx2]);
  li.append(desc);
  button.addEventListener('click', ()=>onClickChangeColor(idx1,idx2));
  button.append(li);
  ul.append(button);
}

function onClickChangeColor(idx1,idx2){
  const box = document.getElementById('brd' + idx1+""+idx2+"");
  setTimeout(()=> box.style.borderColor='red', 0);
  setTimeout(()=> box.style.borderColor='black', 2000);
}

// export function addDesc(idx1, idx2) {
//   const section = document.getElementById("bls"+ idx1 + "");
//   const button = document.createElement('button');
//   const ul = section.firstElementChild;
//   const li = document.createElement('li');
//   const a = document.createElement('a');
//   a.href='#brd' + idx1 + "" + idx2 + "";
//   li.id= "bld" + (idx1+"") + (idx2 + "");
//   ul.className="items"
//   button.className = "plain";
//   const desc = document.createTextNode(data[sections[idx1]].main[idx2]);
//   li.append(desc);
//   button.addEventListener('click', function(){
//     const box = document.getElementById('brd' + idx1+""+idx2+"");
//     setTimeout(()=> box.style.borderColor='red', 0);
//     setTimeout(()=> box.style.borderColor='black', 2000);
//   })
//   button.append(li);
//   a.append(button);
//   ul.append(a);
// }

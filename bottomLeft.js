import { addBoard } from './bottomRight.js';

const root = document.getElementById('bottom-left');
root.appendChild(document.createElement('ul'));
const now = root.lastChild ;

const onClickAddSection = () => {
  const section = prompt('main');
  data2.push({ [ section ] : [] });
  addSec(data2.length - 1);
  addBoard(data2.length - 1);
}

const onClickChangeColor = (idx1,idx2) => {
  const box = document.getElementById('brd' + idx1+""+idx2+"");
  setTimeout(()=> box.style.borderColor='red', 0);
  setTimeout(()=> box.style.borderColor='black', 2000);
}

const addSec = idx => {
  const li = document.createElement('li');
  li.id = "bls" + idx+"";
  li.className = 'section-item';
  const tmp = document.createTextNode(Object.keys(data2[idx])[0]);
  li.append(tmp);
  li.append(document.createElement('ul'));
  now.append(li);
}

export const addDesc = (idx1, idx2) => {
  const section = document.getElementById("bls"+ idx1 + "");
  const button = document.createElement('button');
  const ul = section.firstElementChild;
  const li = document.createElement('li');
  li.id= "bld" + (idx1+"") + (idx2 + "");
  ul.className="items"
  button.className = "plain";
  const desc = document.createTextNode(data2[idx1][Object.keys(data2[idx1])[0]][idx2].main);
  li.append(desc);
  button.addEventListener('click', ()=>onClickChangeColor(idx1,idx2));
  button.append(li);
  ul.append(button);
}

const initBottomLeft = () => {
  data2.forEach(function(element,idx,array){
    const section = Object.keys(element)[0];
    addSec(idx);
    data2[idx][section].forEach(function(element2, idx2, array2){
      addDesc(idx,idx2);
    })
  })
  const button = document.createElement('button');
  const add = document.createTextNode("+ add section");
  button.append(add);
  root.append(button);
  button.addEventListener('click', onClickAddSection);
}

initBottomLeft();



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




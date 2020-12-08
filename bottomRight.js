import { addDesc } from './bottomLeft.js';

const root = document.getElementById('bottom-right');
root.appendChild(document.createElement('ul'));
const now = root.lastChild;
now.className = 'items';

initBottomRight();

function initBottomRight(){
  data2.forEach(function(element1, idx1, array1){
    addBoard(idx1);
    array1[idx1][Object.keys(array1[idx1])[0]].forEach(function(element2, idx2, array2){
      addBox(idx1,idx2);
    })
  });
}

export function addBoard(idx){
  const li = document.createElement('li');
  const ul = document.createElement('ul');
  const button = document.createElement('button');
  const tmp = document.createTextNode(Object.keys(data2[idx])[0]);
  const butText = document.createTextNode( "+ add " + Object.keys(data2[idx])[0]);
  li.id = "brd" + idx+"";
  ul.className="boxes";
  button.append(butText);
  button.style.marginBottom = "30px";
  button.addEventListener('click', ()=> onClickAddBox(idx));
  li.append(tmp);
  li.append(ul);
  li.append(button);
  now.append(li);
}

function onClickAddBox(idx){
  const main = prompt('main');
  const sub = prompt('sub');
  data2[idx][Object.keys(data2[idx])[0]].push({main : main, sub : sub});
  addBox(idx,data2[idx][Object.keys(data2[idx])[0]].length - 1);
  addDesc(idx,data2[idx][Object.keys(data2[idx])[0]].length - 1);
}

function addBox(idx1, idx2) {
  const section = document.getElementById("brd" + idx1 + "");
  const ul = section.firstElementChild;
  const br = document.createElement('br');
  const button = document.createElement('button');
  button.id = "brd" + (idx1 + "") + (idx2 + "");
  button.style.borderColor = 'black';
  button.style.margin = "10px";
  const li = document.createElement('li');
  li.className = 'box';
  const descmain = document.createTextNode(data2[idx1][Object.keys(data2[idx1])[0]][idx2].main);
  const descsub = document.createTextNode(data2[idx1][Object.keys(data2[idx1])[0]][idx2].sub);
  li.append(descmain);
  li.append(br);
  li.append(descsub);
  button.append(li);
  button.addEventListener('click', () => onClickUpdate(idx1,idx2,ul,button));
  ul.append(button);
}

function onClickUpdate(idx1, idx2, ul, button) {
  const main = prompt('main');
  const sub = prompt('sub');
  data2[idx1][Object.keys(data2[idx1])[0]].main = main;
  data2[idx1][Object.keys(data2[idx1])[0]].sub = sub;
  const changeR = document.getElementById("brd" + (idx1 + "") + (idx2 + ""));
  changeR.firstChild.firstChild.textContent = main;
  changeR.firstChild.lastChild.textContent = sub;
  const changeL = document.getElementById("bld" + idx1 + "" + idx2 + "");
  changeL.firstChild.textContent = main;
}

import { addDesc } from './bottomLeft.js';

const root = document.getElementById('bottom-right');
root.appendChild(document.createElement('ul'));
const now = root.lastChild;
now.className = 'items';

initBottomRight();

function initBottomRight(){
  for(let i = 0;i<sections.length;i++) {
    addBoard(i);
    for (let j = 0; j < data[sections[i]].main.length; j++) {
      addBox(i, j);
    }
  }
}

export function addBoard(idx){
  const li = document.createElement('li');
  const ul = document.createElement('ul');
  const button = document.createElement('button');
  const tmp = document.createTextNode(sections[idx]);
  const butText = document.createTextNode( "+ add " + sections[idx]);
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
  data[sections[idx]].main.push(main);
  data[sections[idx]].sub.push(sub);
  addBox(idx,data[sections[idx]].main.length - 1);
  addDesc(idx,data[sections[idx]].main.length-1);
}

function addBox(idx1, idx2) {
  const section = document.getElementById("brd" + idx1 + "");
  const ul = section.firstElementChild;
  const button = document.createElement('button');
  const br = document.createElement('br');
  button.id = "brd" + (idx1 + "") + (idx2 + "");
  button.style.borderColor = 'black';
  button.style.margin = "10px";
  const li = document.createElement('li');
  li.className = 'box';
  const descmain = document.createTextNode(data[sections[idx1]].main[idx2]);
  const descsub = document.createTextNode(data[sections[idx1]].sub[idx2]);
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
  data[sections[idx1]].main[idx2] = main;
  data[sections[idx1]].sub[idx2] = sub;
  const changeR = document.getElementById("brd" + (idx1 + "") + (idx2 + ""));
  changeR.firstChild.firstChild.textContent = main;
  changeR.firstChild.lastChild.textContent = sub;
  const changeL = document.getElementById("bld" + idx1 + "" + idx2 + "");
  changeL.firstChild.textContent = main;
}

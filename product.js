const body = document.getElementById('product');
const itemInput = document.createElement('input');
itemInput.id="item";
const descInput = document.createElement('input');
descInput.id="desc"
const create = document.createElement('button');
body.append(itemInput);
body.append(descInput);
create.textContent = '추가';
body.append(create);

export const board = {
  item : ['Invite&Share 개선', '[11/17] 권한체계 및 보 url', 'Milestone', 'Mobile 대응', 'Mail (Mailchimp)', 'Homepage'],
  desc : ['Updated yesterday by Sophie', 'Updated 11/17 by Sophie', 'Updated 11/10 by Sophie', 'Updated 11/09 by Sophie', 'Updated 10/14 by Sophie', 'Updated 09/01 by jeehea']
}

function onClick(but, id){
  but.addEventListener('click',  function() {
    const item = prompt("1");
    const desc = prompt("2");
    document.getElementById(String(id)).firstChild.firstChild.textContent = item;
    document.getElementById(String(id)).firstChild.lastChild.textContent = desc;
  });
}

body.appendChild(document.createElement('div'));
body.lastElementChild.className='items';
for(let i = 0; i<board.item.length; i++){
  const but = document.createElement('button');
  but.id=String(i);
  const div = document.createElement('div');
  div.className = 'box';
  const proItem = document.createElement('div');
  proItem.textContent = board.item[i];
  const proDesc = document.createElement('div');
  proDesc.textContent = board.desc[i];
  div.append(proItem);
  div.append(proDesc);
  but.append(div);
  onClick(but, i);
  body.lastElementChild.append(but);
}



//새로 추가한 애들도 button 형식으로 바뀌도록 해야, btn Array 추가, eventListener 추가
create.addEventListener('click', function() {
  const but = document.createElement('button');
  but.id=String(board.item.length);
  const div = document.createElement('div');
  div.className = 'box';
  const proItem = document.createElement('div');
  proItem.textContent = document.getElementById('item').value;
  const proDesc = document.createElement('div');
  proDesc.textContent = document.getElementById('desc').value;
  div.append(proItem);
  div.append(proDesc);
  but.append(div);
  onClick(but, but.id);
  body.lastElementChild.append(but);
  board.item.push(proItem.textContent);
  board.desc.push(proDesc.textContent);
});

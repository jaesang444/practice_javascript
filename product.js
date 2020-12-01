const body = document.getElementById('product');
const board = {
  item : ['Invite&Share 개선', '[11/17] 권한체계 및 보 url', 'Milestone', 'Mobile 대응', 'Mail (Mailchimp)', 'Homepage'],
  desc : ['Updated yesterday by Sophie', 'Updated 11/17 by Sophie', 'Updated 11/10 by Sophie', 'Updated 11/09 by Sophie', 'Updated 10/14 by Sophie', 'Updated 09/01 by jeehea']
}

const itemInput = document.createElement('input');
const descInput = document.createElement('input');
const create = document.createElement('button');
create.textContent = '추가';
body.append(itemInput);
body.append(descInput);
body.append(create);

const itemChange = document.createElement('input');
const descChange = document.createElement('input');
const update = document.createElement('button');
update.textContent = '수정';
body.append(itemChange);
body.append(descChange);
body.append(update);

body.appendChild(document.createElement('div'));
body.lastElementChild.className='items';
for(let i = 0; i<board.item.length; i++){
  const div = document.createElement('div');
  div.className = 'box';
  const proItem = document.createElement('div');
  proItem.textContent = board.item[i];
  const proDesc = document.createElement('div');
  proDesc.textContent = board.desc[i];
  div.append(proItem);
  div.append(proDesc);
  body.lastElementChild.append(div);
}



create.addEventListener('click', function(){
  const div = document.createElement('div');
  div.className = 'box';
  const proItem = document.createElement('div');
  proItem.textContent = itemInput.value;
  const proDesc = document.createElement('div');
  proDesc.textContent = descInput.value;
  div.append(proItem);
  div.append(proDesc);
  body.lastElementChild.append(div);
});


update.addEventListener('click', function(){
  body.lastElementChild.lastElementChild.firstElementChild.textContent = itemChange.value;
  body.lastElementChild.lastElementChild.lastElementChild.textContent = descChange.value;
  // body.lastElementChild.firstElementChild.textContent = itemChange.value;
  // body.lastElementChild.lastElementChild.textContent = descChange.value;
  // console.log(body.lastElementChild.firstElementChild);
  // console.log(body.lastElementChild.lastElementChild);
  // console.log(body.lastChild.firstChild);
  // console.log(body.lastChild.lastChild);
});


const body = document.getElementById('product');
const board = {
  item : ['Invite&Share 개선', '[11/17] 권한체계 및 보 url', 'Milestone', 'Mobile 대응', 'Mail (Mailchimp)', 'Homepage'],
  desc : ['Updated yesterday by Sophie', 'Updated 11/17 by Sophie', 'Updated 11/10 by Sophie', 'Updated 11/09 by Sophie', 'Updated 10/14 by Sophie', 'Updated 09/01 by jeehea']
}

const itemInput = document.createElement('input');
itemInput.id="item";
const descInput = document.createElement('input');
descInput.id="desc"
const create = document.createElement('button');
const update = document.createElement('button');
body.append(itemInput);
body.append(descInput);
create.textContent = '추가';
body.append(create);
update.textContent = '수정';
body.append(update);

// const form = document.createElement('form');
// const itemInput = document.createElement('input');
// itemInput.id="item";
// const descInput = document.createElement('input');
// descInput.id="desc"
// const create = document.createElement('button');
// const update = document.createElement('button');
// form.append(itemInput);
// form.append(descInput);
// create.textContent = '추가';
// form.append(create);
// update.textContent = '수정';
// form.append(update);


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
  proItem.textContent = document.getElementById('item').value;
  const proDesc = document.createElement('div');
  proDesc.textContent = document.getElementById('desc').value;
  div.append(proItem);
  div.append(proDesc);
  body.lastElementChild.append(div);
});

update.addEventListener('click', function(){
  body.lastElementChild.lastElementChild.firstElementChild.textContent = document.getElementById('item').value;
  body.lastElementChild.lastElementChild.lastElementChild.textContent = document.getElementById('desc').value;
});


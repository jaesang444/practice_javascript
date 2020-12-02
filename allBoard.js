
document.getElementById('allBoard');
export let allBoard = {
  item : ['workspace 비주얼 개선건', 'Album', '200715 15:00 보점검관<scr...'],
  desc : ['Updated 4 days ago by joe jo', 'Updated 11/11 by Sophie', 'Updated 11/06 by Sophie']
};

for (let i = 0; i < allBoard.item.length; i++) {
  document.getElementById('allBoard').append(document.createElement('div'));
  document.getElementById('allBoard').lastElementChild.className = 'box';
  document.getElementById('allBoard').lastElementChild.appendChild(document.createElement('div'));
  document.getElementById('allBoard').lastElementChild.appendChild(document.createTextNode(allBoard.item[i]));
  document.getElementById('allBoard').lastElementChild.appendChild(document.createElement('div'));
  document.getElementById('allBoard').lastElementChild.appendChild(document.createTextNode(allBoard.desc[i]));
}

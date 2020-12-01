let recViewed = {
  item: ['Stand-up(11/25)'],
  desc : ['updated 15 hr ago by Sophie.Lee'],
};
for (let i = 0; i < recViewed.item.length; i++) {
  document.getElementById('recView').append(document.createElement('div'));
  document.getElementById('recView').lastElementChild.className = 'box';
  document.getElementById('recView').lastElementChild.appendChild(document.createElement('div'));
  document.getElementById('recView').lastElementChild.appendChild(document.createTextNode(recViewed.item[i]));
  document.getElementById('recView').lastElementChild.appendChild(document.createElement('div'));
  document.getElementById('recView').lastElementChild.appendChild(document.createTextNode(recViewed.desc[i]));
}


let now = document.getElementById('options');
let data = ['Recently viewed', 'General', 'Product', 'Iteration Review', 'Stand-up', 'Retrospective', 'Design Review', 'Workshop', "+ add section"];
for(let i = 0; i<data.length; i++) {
  const div = document.createElement('div');
  div.className = 'section-item';
  const recData = document.createTextNode(data[i]);
  div.append(recData);
  now.append(div);
}

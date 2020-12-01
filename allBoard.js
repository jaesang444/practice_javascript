document.getElementById('allBoard');
  let allBoard = {
  item : ['workspace 비주얼 개선건', 'Album', '200715 15:00 보점검관<scr...'],
  desc : ['Updated 4 days ago by joe jo', 'Updated 11/11 by Sophie', 'Updated 11/06 by Sophie']
};
  for(let i = 0;i<allBoard.item.length;i++){
  document.write("<div class='box'>");
  document.write("<div>" + allBoard.item[i] + "</div>");
  document.write("<div>" + allBoard.desc[i] + "</div>");
  document.write("</div>");
}

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3
  };
  
  let bed = {
    sheet: 1,
    pillow: 2
  };
  
  let pockets = {
    money: 2000
  };

  pockets.__proto__ = bed;
  bed.__proto__ = table;
  table.__proto__=head;

  alert(pockets.pen);
  alert(bed.glasses);

  let x,start,end,timeElapsedOne,timeElapsedTwo;

  start = Date.now();
  x = pockets.glasses;
  end = Date.now();
  timeElapsedOne = end - start;

  start = Date.now();
  x = head.glasses;
  end = Date.now();
  timeElapsedTwo = end - start


  alert(+timeElapsedOne + " " + +timeElapsedTwo);
  
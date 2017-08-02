var fbnci = [1, 2], max = 1000, index = 1, next= 0, total = 0;
do {
  index++;
  next = fbnci[index-2] + fbnci[index-1];
  if (next <= max) {
      //document.write("   " +next+ "   ");
      fbnci[index] = next;
      if(next%2 == 0){
        total = total + next;
      }
  }
} while(next < max);
document.write(total);
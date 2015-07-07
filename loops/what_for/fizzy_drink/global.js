var Bottles = 99;

while (Bottles > 1) {
  console.log(Bottles + " bottles of beer on the wall, " + Bottles + " bottles of beer.  You take one down, pass it around, " + (Bottles - 1) + " bottles of beer on the wall.");
  Bottles--;
}

if (Bottles == 1) {
  console.log (Bottles + " bottle of beer on the wall, " + Bottles + " bottle of beer. You take one down, pass it around, no more bottles of beer on the wall.");
}

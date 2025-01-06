let count = 0;
function inception() {
  if (count > 3) {
    return "Done!";
  }
  count++;
  return inception();
}

inception();

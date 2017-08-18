function super_digit(input) {
  input = input.split(' ');
  let n = input[0],
    k = input[1];

  // take out all factors of 10
  while(k % 10 === 0) k /= 10;

  let digit = n.repeat(k);
  let sum;

  do {
    sum = digit.split('').reduce((sum, num) => sum + Number(num), 0);
    sum += '';
  } while(sum.length > 1 && (digit = sum));

  return sum;
}

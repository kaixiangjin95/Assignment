number = 3456;
total = 0;
while (number>0) {
    i = number % 10;
    total = total + i;
    number = Math.floor(number / 10);
}
console.log(total);

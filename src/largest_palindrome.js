function largestPalindrome(str) {
  const stringLength = str.length;

  // map that marks the occurrence of a number
  const numbers = new Map();

  for (let i = 0; i < stringLength; i++) {
    // zero = 48
    if (numbers.has(str.charCodeAt(i) - 48)) {
      numbers.set(
        str.charCodeAt(i) - 48,
        numbers.get(str.charCodeAt(i) - 48) + 1
      );
    } else {
      numbers.set(str.charCodeAt(i) - 48, 1);
    }
  }

  const largest = [];
  let middleNumber = 0;
  // pointer of front
  let front = 0;

  // greedily start from 9 to 0 and place the
  // greater number in front and odd in the middle

  for (let i = 9; i >= 0; i--) {
    // if the occurrence of number is odd
    if (numbers.get(i) & 1) {
      // place one odd occurring number
      // in the middle
      // check if the nuw number is greater

      if (middleNumber < String.fromCharCode(i + 48)) {
        middleNumber = String.fromCharCode(i + 48);
        largest[Math.floor(stringLength / 2)] = middleNumber;
      }

      // decrease the count
      numbers.set(i, numbers.get(i) - 1);

      // place the rest of numbers greedily
      while (numbers.get(i) > 0) {
        // place greedily at front
        largest[front] = String.fromCharCode(i + 48);
        largest[stringLength - front - 1] = String.fromCharCode(i + 48);
        // 2 numbers are placed, so decrease the count
        numbers.set(i, numbers.get(i) - 2);
        front++;
      }
    } else {
      // if all numbers occur even times,
      // then place greedily
      while (numbers.get(i) > 0) {
        // place greedily at front
        largest[front] = String.fromCharCode(i + 48);
        largest[stringLength - front - 1] = String.fromCharCode(i + 48);

        // 2 numbers are placed, so decrease the count
        numbers.set(i, numbers.get(i) - 2);

        // increase placing position
        front++;
      }
    }
  }

  console.log(largest.filter(Boolean).join(''));
}

//var s = "313551"; // 531135
//var s = "1122334" // 3214123
var s = '38468321'; //83638
//var s = '38468329'; // 83938
largestPalindrome(s);

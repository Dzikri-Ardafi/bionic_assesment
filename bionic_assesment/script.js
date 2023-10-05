
function selisihMaksimum(arr) {
  if (arr.length < 2) {
    return null;
  }
  let min = arr[0];
  let maxSelisih = 0;
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    const selisih = current - min;
    if (selisih > maxSelisih) {
      maxSelisih = selisih;
    }

    if (current < min) {
      min = current;
    }
  }

  return maxSelisih;
}

const harga = [10, 7, 5, 8, 11, 9, 1];
const hasil = selisihMaksimum(harga);
console.log(hasil);


function generatePattern(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    result += '**';
    for (let k = i + 2; k <= n; k++) {
      result += k;
    }
    result += '\n';
  }
  return result;
}

const n = 5;
const pattern = generatePattern(n);
console.log(pattern);

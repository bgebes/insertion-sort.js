function InsertionSort(arr) {
  const [sArr, tStart] = [[...arr], Date.now()];

  let i;
  let j;
  let key;
  for (i = 1; i < sArr.length; i++) {
    key = sArr[i];
    j = i - 1;

    while (j >= 0 && sArr[j] > key) {
      sArr[j + 1] = sArr[j];
      j--;
    }

    sArr[j + 1] = key;
  }

  const tEnd = Date.now();
  const processTime = `${tEnd - tStart}ms`;

  return {
    array: sArr,
    processTime: processTime === "0ms" ? "1ms" : processTime,
  };
}

'use strict'

// Функция удаления дупликата

    function removeDuplicates(arr) {
        let result = [];
        console.log(arr.sort(function(a, b) { return a - b; }));
        for (let str of arr) {
          if (!result.includes(str)) {
            result.push(str);
          }
        }
      
        return console.log(result);
      }

    const resultArray = removeDuplicates([1, 2, 3, 2, 2, 3, 1, 5, 9, 7, 7]); // [1, 2, 3, 5, 7, 9]

// Функция переворачивания строки

    function reverteString(str) {
        return console.log(str.split('').reverse().join(''))
    }
    const revertedStr = reverteString('laptop'); // potpal

// Создание многомерного массива

function createMatrix(n,m) {
  let result = new Array(n).fill('').map(() => new Array(m).fill(''))
  let counter = 1;
  let startRow = 0;
  let endRow = m-1;
  let starCol = 0;
  let endCol = n-1

  while (starCol <= endCol) {
    for (let i = startRow; i <= endRow; i++) {
      result[starCol][i] = counter;
      counter++;
    }
    starCol++
  } console.log(result)
} 

  const matrixArr = createMatrix(3, 4);
  createMatrix(6, 5);

    // 
    //   [1, 2, 3, 4],
    //   [5, 6, 7, 8],
    //   [9, 10, 11, 12]
    // 
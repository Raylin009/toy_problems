 //rotate image inplace

/*
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]
 */

 /*
[
  [ 1, 2, 3, 4],
  [12, 1, 2, 5],
  [11, 4, 3, 6],
  [10, 9, 8, 7],
]
 */


/* 
[
  [ 1, 2, 3, 4, 5],
  [16, 1, 2, 3, 6],
  [15, 8, 1, 4, 7],
  [14, 7, 6, 5, 8],
  [13,12,11,10, 9],
]
*/



// forEvery ring
  //trivers the circle
  //untill it repeats ring.lenght - 1 times
    // go right, down, left, up
      //shift one number at a time
  //}



  const rotateInPlace = matrix => {
    triversRing(matrix)
  };
  
  const triversRing = matrix => {
    const numOfRing = Math.floor(matrix.length / 2)
    for(let ringNum = 0; ringNum < numOfRing; ringNum += 1){
      triversCircle(ringNum, matrix);
    };
  };
  
  const triversCircle = (ringNum, matrix) => {
    let repeatTimes = matrix.length - 1 - ringNum;
    const min = ringNum;
    const max = matrix.length - 1 - ringNum;
  
    for(let i = min; i < max; i += 1){
      const cash = { val: matrix[ringNum][ringNum] }
  
      travelRight(min, max, cash, matrix);
      travelDown(min, max, cash, matrix);
      travelLeft(min, max, cash, matrix);
      travelUp(min, max, cash, matrix);
    }
  }
  
  const travelRight = (min, max, sto, matrix) => {
  
    for(let i = min + 1; i <= max; i += 1){
      const temp = matrix[min][i];
      matrix[min][i] = sto.val;
      sto.val = temp
    }
    return sto
  }
  
  const travelDown = (min, max, sto, matrix) => {
  
    for(let i = min + 1; i <= max; i += 1){
      const temp = matrix[i][max];
      matrix[i][max] = sto.val;
      sto.val = temp
    }
    return sto
  
  }
  
  const travelLeft = (min, max, sto, matrix) => {
  
    for(let i = max - 1; i >= min; i -= 1){
      const temp = matrix[max][i];
      matrix[max][i] = sto.val;
      sto.val = temp
    }
    return sto
  
  }
  
  const travelUp = (min, max, sto, matrix) => {
  
    for(let i = max - 1; i >= min; i -= 1){
      const temp = matrix[i][min];
      matrix[i][min] = sto.val;
      sto.val = temp
    }
    return sto
  
  }
  
  
  let fiveByFive = [
    [ 1, 2, 3, 4, 5], 
    [16, 1, 2, 3, 6],
    [15, 8, 1, 4, 7],
    [14, 7, 6, 5, 8],
    [13,12,11,10, 9],
  ]
  
  rotateInPlace(fiveByFive)
  console.log(fiveByFive)
  
  
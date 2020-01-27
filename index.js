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









/* 1
let sto = null
[
  [ 1, 2, 3, 4, 5], matrix[v][h]
  [16, 1, 2, 3, 6],
  [15, 8, 1, 4, 7],
  [14, 7, 6, 5, 8],
  [13,12,11,10, 9],
]
*/























/* 2
temp = 1
[ 
  [ null, 2, 3, 4, 5], matrix[v][h]
  [16, 1, 2, 3, 6],
  [15, 8, 1, 4, 7],
  [14, 7, 6, 5, 8],
  [13,12,11,10, 9],
]
*/
/*3
temp 2
[ 
  [ null, 1, 3, 4, 5], matrix[v][h]
  [16, 1, 2, 3, 6],
  [15, 8, 1, 4, 7],
  [14, 7, 6, 5, 8],
  [13,12,11,10, 9],
]
*//* 4
[
  [ null, 1, 2, 3, 5], matrix[v][h]
  [16, 1, 2, 3, 6],
  [15, 8, 1, 4, 7],
  [14, 7, 6, 5, 8],
  [13,12,11,10, 9],
]
*//* 5
[
  [ null, 1, 2, 3, 4], matrix[v][h] 
  [16, 1, 2, 3, 6],
  [15, 8, 1, 4, 7],
  [14, 7, 6, 5, 8],
  [13,12,11,10, 9],
]
*//*
[
  [ 1, 2, 3, 4, 5], matrix[v][h]
  [16, 1, 2, 3, 6],
  [15, 8, 1, 4, 7],
  [14, 7, 6, 5, 8],
  [13,12,11,10, 9],
]
*//*
[
  [ 1, 2, 3, 4, 5], matrix[v][h]
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
    return matrix
  };
  
  const triversRing = matrix => {
    //break down the matrix in rings
    //call cb on every ring
    const numOfRing = Math.floor(matrix.length / 2)
    for(let ringNum = 0; ringNum < numOfRing; ringNum += 1){
      triversCircle(ringNum, matrix);
    };
  };
  
  const triversCircle = (ringNum, matrix) => {
    //go right, down, left, up
      //sift1
  
    /*
      while(iterationNumber !== matrix.length - 1){
        travelRight()
        travelDown()
        travelLeft()
        travelUp()
        iterationNumber++
      }
    */
    // const limitLeft = ringNum;
    // const limitRight = matrix.length - 1 - ringNum;
    // const st = { h : ringNum, v : ringNum };
    // const cur = { h : ringNum, v : ringNum };
    // let sto = null
    travelRight(ringNum, matrix, limitLeft, limitRight, sto)
    travelDown(ringNum, matrix, limitLeft, limitRight, sto)
    travelLeft(ringNum, matrix, limitLeft, limitRight, sto)
    travelUp(ringNum, matrix, limitLeft, limitRight, sto)
  };
  
  const travelRight = (ringNum, matrix, limitLeft, limitRight) => {
      //matrix[v][h]
      //increas h to max
        // invoke shift
  
      for(let i = min; i <= matrix; i += 1){
        //shift(matrix[min][i])
  
      }
  }
  
  const shift = (matrix, min, i) => {
    //shift 1 
    //declate temp
    //assign temp current grid value
    //assign current grid with sto's value
  }
  
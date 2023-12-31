//Complexity
//O(log(m * n)) = Time complexity.
//O(1) = Space Complexity

//Function for check the matrix sorted in decreasing order or not
function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;
//initialize row and column
  let row = 0;
  let col = matrix[0].length - 1;

  while (col >= 0 && row <= matrix.length - 1) {
    //if row X column = target ie 3 then return true else
    if (matrix[row][col] === target) return true;
    //if greater then target then decrement col.
    else if (matrix[row][col] > target) col--;
    //otherwise increment row
    else if (matrix[row][col] < target) row++;
  }
  return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));

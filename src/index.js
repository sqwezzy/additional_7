module.exports = function solveSudoku(matrix) {
  var solvedMatrix = matrix;

  if(solved(matrix))
  {
    solvedMarix=matrix;
  }

  return solvedMatrix;
}

function solved(matrix)
{
  var cell = [];
  if(!findEmpSpc(matrix, cell))
  {
    return true;
  }
  var row = cell[0];
  var col = cell[1];
  for(var num = 1;num<10;num++)
  {
    if(!checkRow(matrix, row, num) && !checkCol(matrix, col, num) && !checkBox(matrix,row - row % 3, col - col % 3,num))
    {
      matrix[row][col] = num;
      if(solved(matrix))
      {
        return true;
      }
      matrix[row][col] = 0;
    }
  }
  return false;
}

function findEmpSpc(matrix, cell)
{
  for(var i = 0; i<9; i++)
  {
    for(var j=0; j<9; j++)
    {
      if(matrix[i][j] == 0)
      {
        cell[0] = i;
        cell[1] = j;
        return true;
      }
    }
  }
  return false;
}

function checkRow(matrix, row, num)
{
  for(var i = 0; i < 9; i++)
  {
    if(matrix[row][i] == num)
    {
      return true;
    }
  }
  return false;
}

function checkCol(matrix, col, num)
{
  for(var i = 0; i < 9; i++)
  {
    if(matrix[i][col] == num)
    {
      return true;
    }
  }
  return false;
}

function checkBox(matrix, row, col, num)
{
  for(var i = 0; i < 3; i++)
  {
    for(var j = 0; j < 3; j++)
    {
      if(matrix[i + row][j + col] == num)
      {
        return true;
      }
    }
  }
  return false;
}

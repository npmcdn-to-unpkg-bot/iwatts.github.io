/**
 * Created by isaacwatts on 4/27/16.
 */

function matrixMulti(matrix1, matrix2) {

    //layout example
    var row1 = [1, 2, 3];
    var row2 = [4, 5, 6];
    var row3 = [7, 8, 9];

    //var matrix1 = [row1, row2, row3];

    //Result Matrix
    var resultMatrix = [[],[]];

    //Multiply Array
    resultMatrix[0][0] = (matrix1[0][0] * matrix2[0][0]) + (matrix1[0][1] * matrix2[0][1]);
    resultMatrix[1][0] = (matrix1[1][0] * matrix2[1][0]) + (matrix1[1][1] * matrix2[1][1]);
    resultMatrix[0][1] = (matrix1[0][1] * matrix2[0][1]) + (matrix1[0][1] * matrix2[0][1]);
    resultMatrix[1][1] = (matrix1[1][0] * matrix2[1][0]) + (matrix1[1][1] * matrix2[1][1]);


    //Return Matrix
    return resultMatrix;

}

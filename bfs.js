function minDistancetoRescue(forest) {
  if (!forest || forest.length === 0 || forest[0].length === 0) {
    return -1;
  }

  //Determine the dimension of the forest
  const rows = forest.length;
  const cols = forest[0].length;

  //Determining directions to move
  const directions = [
    [-1, 0], //up
    [1, 0], //down
    [0, -1], //left
    [0, 1], //right
  ];

  //BFS Initialisation
  const queue = [[0, 0, 0]]; // [row, col, distance] >> Initialise a queue for the algorithm
  // representing the starting point at the top left cell of the grid
  const visited = new Set();
  visited.add("0,0");

  // As long as the length of the queue is bigger than 0, update queue by removing first index
  while (queue.length > 0) {
    const [row, column, distance] = queue.shift();

    //Checking if the obstacle is found
    if (forest[row][column] === 9) {
      return distance;
    }

    //Explore neighbors
    // Loop to iterate over all possible directions from the current cell
    for (const [dr, dc] of directions) {
      //dr,dc represent change in row or col direction
      //loop iterate over each pair in the directions array
      const nr = row + dr; //calculate next direction based on the current
      const nc = column + dc;
      //r and c are the current cell's row and column indices.
      //dr and dc are the row and column changes for the current direction.

      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        forest[nr][nc] !== 0 &&
        !visited.has(`${nr}, ${nc}`)
      ) {
        visited.add(`${nr}, ${nc}`);
        queue.push([nr, nc, distance + 1]);
      }
    }
  }

  //Obstacle not found
  return -1;
}

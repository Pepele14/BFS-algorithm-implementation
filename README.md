# BFS Project

This project implements a simple Breadth-First Search (BFS) algorithm in JavaScript. The BFS algorithm is used to find the minimum distance required for a rescue robot to reach a target (lost hiker) in a forest represented as a two-dimensional grid.

## Project Structure

- `index.js`: The entry point of the application. It sets up the forest grid and calls the BFS function.
- `bfs.js`: Contains the BFS algorithm implementation.

## Algorithm Details

The forest grid is represented as follows:

- Traversable areas are represented by `1`.
- Impassable terrain is represented by `0`.
- The target (lost hiker) is represented by `9`.

The robot can move one block up, down, left, or right at a time and starts from the top-left corner of the grid.

## How to Run

1. Ensure you have Node.js installed on your machine.
2. Clone the repository and navigate to the project directory.
3. Install any dependencies if required (though none are needed for this simple example).
4. Run the project using the following command:
   ```sh
   node index.js
   ```

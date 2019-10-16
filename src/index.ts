import Plateau from './Plateau';
import Rover from './Rover';
import * as Operation from './Operation';
import { Direction, Move } from './constants';

let plateau: Plateau = new Plateau(5, 5, [
  new Rover(1, 2, Direction.N)
]);

Operation.moveRover(plateau, 0, Move.L);
Operation.moveRover(plateau, 0, Move.M);
Operation.moveRover(plateau, 0, Move.L);
Operation.moveRover(plateau, 0, Move.M);
Operation.moveRover(plateau, 0, Move.L);
Operation.moveRover(plateau, 0, Move.M);
Operation.moveRover(plateau, 0, Move.L);
Operation.moveRover(plateau, 0, Move.M);
Operation.moveRover(plateau, 0, Move.M);

Operation.addRover(plateau, new Rover(3, 3, Direction.E));

Operation.moveRover(plateau, 1, Move.M);
Operation.moveRover(plateau, 1, Move.M);
Operation.moveRover(plateau, 1, Move.R);
Operation.moveRover(plateau, 1, Move.M);
Operation.moveRover(plateau, 1, Move.M);
Operation.moveRover(plateau, 1, Move.R);
Operation.moveRover(plateau, 1, Move.M);
Operation.moveRover(plateau, 1, Move.R);
Operation.moveRover(plateau, 1, Move.R);
Operation.moveRover(plateau, 1, Move.M);

for (var i = plateau.rovers.length - 1; i >= 0; i--) {
  console.log(plateau.rovers[i]);
}

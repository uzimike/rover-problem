import { Direction, Move } from './constants';
import Plateau from './Plateau';
import Rover from './Rover';

export class Operation {
  addRover(plateau: Plateau, rover: Rover) {
    if (this.positionValid(plateau, plateau.rovers.length + 1, rover)) {
      plateau.rovers.concat(rover);
    }
  }

  moveRover(plateau: Plateau, roverIndex: number, rover: Rover, move: Move) {
    let newRover = rover;

    if (move === Move.M) {
      switch (newRover.dir) {
        case 'N':
          newRover.y++;
          break;
        case 'E':
          newRover.x++;
          break;
        case 'S':
          newRover.y--;
          break;
        case 'W':
          newRover.x--;
          break;
        default:
          throw new Error('Invalid M move...');
      }
    }
    else if (move === Move.L) {
      switch (newRover.dir) {
        case 'N':
          newRover.dir = Direction.W;
        case 'E':
          newRover.dir = Direction.N;
        case 'S':
          newRover.dir = Direction.E;
        case 'W':
          newRover.dir = Direction.S;      
        default:
          throw new Error('Invalid L move...');
      }
    }
    else if (move === Move.R) {
      switch (newRover.dir) {
        case 'N':
          newRover.dir = Direction.E;
        case 'E':
          newRover.dir = Direction.S;
        case 'S':
          newRover.dir = Direction.W;
        case 'W':
          newRover.dir = Direction.N;      
        default:
          throw new Error('Invalid R move...');
      }
    }
    else {
      throw new Error('Invalid  move ' + move);
    }

    if (this.positionValid(plateau, roverIndex, newRover)) {
      plateau.rovers[roverIndex] = newRover;
    }
  }

  positionValid(plateau: Plateau, roverIndex: number, rover: Rover) {
    // check if rover is out of bounds
    if (rover.x > plateau.w || rover.x < 0 || rover.y > plateau.h || rover.y < 0) {
      throw new Error('Rover out of bounds');
    }

    // check if rover is taking up space of another rover
    for (var i = plateau.rovers.length - 1; i >= 0; i--) {
      if (roverIndex === i) continue;
      if (rover.x === plateau.rovers[i].x && rover.y === plateau.rovers[i].y) {
        throw new Error('Rover is going to crash');
      }
    }

    return true;
  }
}

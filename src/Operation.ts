import { Direction, Move } from './constants';
import Plateau from './Plateau';
import Rover from './Rover';

export function addRover(plateau: Plateau, rover: Rover) {
  if (positionValid(plateau, plateau.rovers.length + 1, rover)) {
    plateau.rovers.push(rover);
  }
}

export function moveRover(plateau: Plateau, roverIndex: number, move: Move) {
  let newRover = plateau.rovers[roverIndex];

  if (move === Move.M) {
    switch (newRover.dir) {
      case Direction.N:
        newRover.y++;
        break;
      case Direction.E:
        newRover.x++;
        break;
      case Direction.S:
        newRover.y--;
        break;
      case Direction.W:
        newRover.x--;
        break;
    }
  }
  else if (move === Move.L) {
    switch (newRover.dir) {
      case Direction.N:
        newRover.dir = Direction.W;
        break;
      case Direction.E:
        newRover.dir = Direction.N;
        break;
      case Direction.S:
        newRover.dir = Direction.E;
        break;
      case Direction.W:
        newRover.dir = Direction.S;
        break;
    }
  }
  else if (move === Move.R) {
    switch (newRover.dir) {
      case Direction.N:
        newRover.dir = Direction.E;
        break;
      case Direction.E:
        newRover.dir = Direction.S;
        break;
      case Direction.S:
        newRover.dir = Direction.W;
        break;
      case Direction.W:
        newRover.dir = Direction.N;      
        break;
    }
  }
  else {
    throw new Error('Invalid  move ' + move);
  }

  try {
    if (positionValid(plateau, roverIndex, newRover)) {
      plateau.rovers[roverIndex] = newRover;
    }
  }
  catch (e) {
    // do nothing
  }
}

function positionValid(plateau: Plateau, roverIndex: number, rover? : Rover) {
  if (rover === undefined) {
    rover = plateau.rovers[roverIndex];
  }
  // check if rover is out of bounds
  if (rover.x > plateau.w || rover.x < 0 || rover.y > plateau.h || rover.y < 0) {
    throw new Error('Rover out of bounds - Rover:' + rover.x + ', ' + rover.y + '. Plateau: ' + plateau.w + ', ' + plateau.h);
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

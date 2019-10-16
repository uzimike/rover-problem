import Plateau from './Plateau';
import Rover from './Rover';

export class Operation {
  addRover(plateau: Plateau, rover: Rover) {
    if (this.checkRover(plateau, plateau.rovers.length, rover)) {
      plateau.rovers.concat(rover);
    }
  }

  changeRover(plateau: Plateau, roverIndex: number, rover: Rover) {
    if (this.checkRover(plateau, roverIndex, rover)) {
      plateau.rovers[roverIndex] = rover;
    }
  }

  checkRover(plateau: Plateau, roverIndex: number, rover: Rover) {
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

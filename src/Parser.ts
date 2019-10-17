import Plateau from './Plateau';
import Rover from './Rover';
import { Move } from './constants';
import * as Operation from './Operation';

export function createPlateauFromInput(input: string) {
  // let re = new RegExp("\d \d*");
  // if (!re.test(input)) {
  //   throw new InvalidInputError('Invalid Coordinates');
  // }
  let inputs = input.split(' ').map(Number);
  return new Plateau(inputs[0], inputs[1]);
}

export function createRoverFromInput(plateau: Plateau, roverIndex: number, input: string) {
  // let re = new RegExp("\d \d [NESWnesw]");
  // if (!re.test(input)) {
  //   throw new InvalidInputError('Invalid Location Input For Rover');
  // }
  let inputs = input.split(' ');
  let rover = new Rover(parseInt(inputs[0]), parseInt(inputs[1]), inputs[2].toUpperCase());
  Operation.addRover(plateau, rover);
}

export function moveRoverFromInput(plateau: Plateau, roverIndex: number, input: string) {
  // let re = new RegExp("[LMRlmr]");
  // if (!re.test(input)) {
  //   throw new InvalidInputError('Invalid Moves Input For Rover');
  // }
  let inputs = input.toUpperCase().split('');
  for (var i = 0; i < inputs.length; i++) {
    // if (!re.test(inputs[i])) {
    //   return;
    // }
    Operation.moveRover(plateau, roverIndex, Move[inputs[i]]);
    // console.log(plateau);
  }
}

class InvalidInputError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidInputError';
  }
}

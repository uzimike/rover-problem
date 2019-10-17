import { Direction, Move } from "./constants";
import * as Operation from "./Operation";
import Plateau from "./Plateau";
import Rover from "./Rover";

export function createPlateauFromInput(input: string) {
  // let re = new RegExp("\d \d*");
  // if (!re.test(input)) {
  //   throw new InvalidInputError("Invalid Coordinates");
  // }
  const inputs = input.split(" ").map(Number);
  return new Plateau(inputs[0], inputs[1]);
}

export function createRoverFromInput(plateau: Plateau, roverIndex: number, input: string) {
  // let re = new RegExp("\d \d [NESWnesw]");
  // if (!re.test(input)) {
  //   throw new InvalidInputError("Invalid Location Input For Rover");
  // }
  const inputs = input.split(" ");
  const rover = new Rover(Number(inputs[0]), Number(inputs[1]), Direction[inputs[2].toUpperCase()]);
  Operation.addRover(plateau, rover);
}

export function moveRoverFromInput(plateau: Plateau, roverIndex: number, input: string) {
  // let re = new RegExp("[LMRlmr]");
  // if (!re.test(input)) {
  //   throw new InvalidInputError("Invalid Moves Input For Rover");
  // }
  const inputs = input.toUpperCase().split("");
  for (const inpt of inputs) {
    // if (!re.test(inputs[i])) {
    //   return;
    // }
    Operation.moveRover(plateau, roverIndex, Move[inpt]);
    // console.log(plateau);
  }
}

class InvalidInputError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidInputError";
  }
}

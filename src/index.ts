import * as inquirer from "inquirer";
import { Direction, Move } from "./constants";
import * as Operation from "./Operation";
import * as Parser from "./Parser";
import Plateau from "./Plateau";
import Rover from "./Rover";

let roverIndex = 0;
let plateau: Plateau;

const plateauQuestions = [
  {
    message: "Plateau size:",
    name: "plateauSize",
    type: "input",
  },
];

const roverQuestions = [
  {
    message: "Rover location:",
    name: "roverLocation",
    type: "input",
  },
  {
    message: "Rover moves:",
    name: "roverMoves",
    type: "input",
  },
  {
    default: true,
    message: "Would you like to add another rover? (just hit enter for YES)",
    name: "askAgain",
    type: "confirm",
  },
];

function plateauPrompt() {
  inquirer.prompt(plateauQuestions).then((input) => {
    plateau = Parser.createPlateauFromInput(input.plateauSize);
  })
  .then(() => {
    roverPrompt(plateau);
  });
}

function roverPrompt(plateau: Plateau) {
  inquirer.prompt(roverQuestions).then((input) => {
    Parser.createRoverFromInput(plateau, roverIndex, input.roverLocation);
    Parser.moveRoverFromInput(plateau, roverIndex, input.roverMoves);
    if (input.askAgain) {
      roverIndex++;
      roverPrompt(plateau);
    } else {
      for (const rover of plateau.rovers) {
        console.info(rover.x, rover.y, rover.dir);
      }
    }
  });
}

plateauPrompt();

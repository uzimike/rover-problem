import Plateau from './Plateau';
import Rover from './Rover';
import * as Operation from './Operation';
import * as Parser from './Parser';
import { Direction, Move } from './constants';
import * as inquirer from 'inquirer';

var roverIndex = 0;
var plateau;

var plateauQuestions = [
  {
    type: 'input',
    name: 'plateauSize',
    message: 'Plateau size:'
  }
];

var roverQuestions = [
  {
    type: 'input',
    name: 'roverLocation',
    message: 'Rover location:'
  },
  {
    type: 'input',
    name: 'roverMoves',
    message: 'Rover moves:'
  },
  {
    type: 'confirm',
    name: 'askAgain',
    message: 'Would you like to add another rover (just hit enter for YES)?',
    default: true
  }
];

function plateauPrompt() {
  inquirer.prompt(plateauQuestions).then(input => {
    plateau = Parser.createPlateauFromInput(input.plateauSize);
  })
  .then(() => {
    roverPrompt(plateau);
  });
}

function roverPrompt(plateau) {
  inquirer.prompt(roverQuestions).then(input => {
    Parser.createRoverFromInput(plateau, roverIndex, input.roverLocation);
    Parser.moveRoverFromInput(plateau, roverIndex, input.roverMoves);
    if (input.askAgain) {
      roverIndex++;
      roverPrompt(plateau);
    } 
    else {
      for (var i = 0; i < plateau.rovers.length; i++) {
        console.log(plateau.rovers[i].x, plateau.rovers[i].y, plateau.rovers[i].dir;
      }
    }
  });
}

plateauPrompt();

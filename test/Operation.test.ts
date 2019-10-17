import * as chai from 'chai';
import { Direction, Move } from '../src/constants';
import * as Operation from '../src/Operation';
import Rover from '../src/Rover';
import Plateau from '../src/Plateau';

describe('Operation.ts', () => {
  let plateau: Plateau = new Plateau(5, 5);

  it('Rover deployment: 1', () => {
    let rover = new Rover(1, 2, Direction.N);
    Operation.addRover(plateau, rover);

    Operation.moveRover(plateau, 0, Move.L);
    chai.expect(rover.dir).to.equal(Direction.W);

    Operation.moveRover(plateau, 0, Move.M);
    chai.expect(rover.x).to.equal(0);

    Operation.moveRover(plateau, 0, Move.L);
    chai.expect(rover.dir).to.equal(Direction.S);

    Operation.moveRover(plateau, 0, Move.M);
    chai.expect(rover.y).to.equal(1);
    
    Operation.moveRover(plateau, 0, Move.L);
    chai.expect(rover.dir).to.equal(Direction.E);

    Operation.moveRover(plateau, 0, Move.M);
    chai.expect(rover.x).to.equal(1);
    
    Operation.moveRover(plateau, 0, Move.L);
    chai.expect(rover.dir).to.equal(Direction.N);

    Operation.moveRover(plateau, 0, Move.M);
    chai.expect(rover.y).to.equal(2);
    
    Operation.moveRover(plateau, 0, Move.M);
    chai.expect(rover.y).to.equal(3);
  });

  it('Rover deployment: 2', () => {
    let rover = new Rover(3, 3, Direction.E);
    Operation.addRover(plateau, rover);

    Operation.moveRover(plateau, 1, Move.M);
    chai.expect(rover.x).to.equal(4);

    Operation.moveRover(plateau, 1, Move.M);
    chai.expect(rover.x).to.equal(5);

    Operation.moveRover(plateau, 1, Move.R);
    chai.expect(rover.dir).to.equal(Direction.S);

    Operation.moveRover(plateau, 1, Move.M);
    chai.expect(rover.y).to.equal(2);
    
    Operation.moveRover(plateau, 1, Move.M);
    chai.expect(rover.y).to.equal(1);

    Operation.moveRover(plateau, 1, Move.R);
    chai.expect(rover.dir).to.equal(Direction.W);
    
    Operation.moveRover(plateau, 1, Move.M);
    chai.expect(rover.x).to.equal(4);

    Operation.moveRover(plateau, 1, Move.R);
    chai.expect(rover.dir).to.equal(Direction.N);
    
    Operation.moveRover(plateau, 1, Move.R);
    chai.expect(rover.dir).to.equal(Direction.E);

    Operation.moveRover(plateau, 1, Move.M);
    chai.expect(rover.x).to.equal(5);
  });

});

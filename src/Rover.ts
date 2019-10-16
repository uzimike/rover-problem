import { Direction } from './constants';

export default class Rover {
  x : number;
  y : number;
  dir : Direction;

  constructor (x, y, dir) {
    this.x = x;
    this.y = y;
    this.dir = dir;
  }
}

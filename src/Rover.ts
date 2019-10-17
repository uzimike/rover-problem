import { Direction } from "./constants";

export default class Rover {
  public x: number;
  public y: number;
  public dir: Direction;

  constructor(x: number, y: number, dir: Direction) {
    this.x = x;
    this.y = y;
    this.dir = dir;
  }
}

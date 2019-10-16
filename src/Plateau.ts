import Rover from './Rover';

export default class Plateau {
  w : number;
  h : number;
  rovers : Rover[];

  constructor (w: number, h: number, rovers: Rover[] = []) {
    this.w = w;
    this.h = h;
    this.rovers = rovers;
  }
}

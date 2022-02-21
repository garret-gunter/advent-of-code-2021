export class Position {
  horizontal: number;
  depth: number;
  aim: number;

  constructor(horizontal = 0, depth = 0, aim = 0) {
    this.horizontal = horizontal;
    this.depth = depth;
    this.aim = aim;
  }

  multiply(): number {
    return this.horizontal * this.depth;
  }
}

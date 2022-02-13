export class Position {
  horizontal: number;
  depth: number;

  constructor(horizontal = 0, depth = 0) {
    this.horizontal = horizontal;
    this.depth = depth;
  }

  multiply(): number {
    return this.horizontal * this.depth;
  }
}

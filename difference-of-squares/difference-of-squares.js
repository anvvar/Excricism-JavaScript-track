//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(N) {
    this.N = N;
  }

  get sumOfSquares() {
    let sum = (this.N * (this.N + 1) * (2 * this.N + 1)) / 6;
    return sum;
  }

  get squareOfSum() {
    let sum = (this.N * (this.N + 1) / 2);
    return Math.pow(sum, 2);
  }

  get difference() {
    return  Math.abs(this.sumOfSquares - this.squareOfSum);
  }
}

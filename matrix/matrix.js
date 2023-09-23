//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(str) {
    this.matrix = str.split("\n").map(row => row.split(" ").map(s => parseInt(s))) 
  }
  get rows() { return this.matrix }
  get columns() {
    const newArr = new Array(this.matrix[0].length).fill("").map(e => [])
    return this.matrix.reduce((a, row) => {
      row.forEach((n, i) => a[i].push(n))
      return a
    }, newArr)
  }
}

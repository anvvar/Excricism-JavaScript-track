//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
    if (!this.checkPrime(p) || !this.checkPrime(g)) {
      throw new Error("");
    }

    this.p = p;
    this.g = g;
  }
  checkPrime(number) {
    let count = 0;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        count++;
      }
    }
    return count === 2;
  }
  getPublicKey(privateKey) {
    throw new Error("Remove this statement and implement this function");
  }

  getSecret(theirPublicKey, myPrivateKey) {
    throw new Error("Remove this statement and implement this function");
  }
}

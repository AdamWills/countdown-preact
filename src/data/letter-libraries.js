const consonantLibrary = {
  B: 2,
  C: 3,
  D: 6,
  F: 2,
  G: 3,
  H: 2,
  J: 1,
  K: 1,
  L: 5,
  M: 4,
  N: 8,
  P: 4,
  Q: 1,
  R: 9,
  S: 9,
  T: 9,
  V: 1,
  W: 1,
  X: 1,
  Y: 1,
  Z: 1
};
const vowelLibrary = { A: 15, E: 21, I: 13, O: 13, U: 5 }

const buildLetterLibrary = () => {
  const consonants = [];
  const vowels = [];
  Object.keys(consonantLibrary).forEach(c => {
    for (let i = 0; i < consonantLibrary[c]; i++) {
      consonants.push(c);
    }
  });
  Object.keys(vowelLibrary).forEach(v => {
    for (let i = 0; i < vowelLibrary[v]; i++) {
      vowels.push(v);
    }
  });
  return {
    vowels,
    consonants
  }
}

export default buildLetterLibrary;
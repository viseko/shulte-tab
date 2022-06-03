import shuffle from "./shuffle";

export default function buildArray(arrSize, shuffled) {
  const arr = new Array(arrSize).fill(null).map((n, i) => i + 1);

  if (shuffled){
    return shuffle(arr)
  }

  return arr;
}
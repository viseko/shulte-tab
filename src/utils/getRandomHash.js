export default function getRandomHash(length) {
  return (Math.random() * (1000000)).toString(16).slice(0, length);
}
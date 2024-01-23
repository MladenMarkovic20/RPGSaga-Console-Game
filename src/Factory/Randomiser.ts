export class Randomiser {
  randomName(): number {
    return Math.round(Math.random() * 9);
  }
  randomHero(): number {
    return Math.round(Math.random() * 3);
  }
  randomHp(): number {
    return Math.round(Math.random() * (100 - 80) + 80);
  }
  randomAp(): number {
    return Math.round(Math.random() * (20 - 5) + 5);
  }
}

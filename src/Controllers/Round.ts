import { Hero } from '../Models/Hero';
import { Duel } from '../Controllers/Duel';

export class Round<THero extends Hero> {
  private pairsOfConstentant: THero[][];

  constructor(pairs: THero[][]) {
    this.pairsOfConstentant = pairs;
  }
  run(): THero[] {
    try {
      const fights = this.pairsOfConstentant.map(pair => new Duel(pair));

      const winners = fights.map(duel => {
        const winner = duel.fight();
        return winner;
      });

      return winners;
    } catch (error: unknown) {
      console.error(error);
      return new Array<THero>();
    }
  }
}

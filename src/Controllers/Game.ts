import { Round } from '../Controllers/Round';
import { Hero } from '../Models/Hero';
import Logger from '../View/Logger';

export class Game {
  private roundNumber: number;

  run(heroes: Array<Hero>): Array<Hero> {
    try {
      this.roundNumber = 1;

      Logger.paragraph();
      Logger.greeting(this.roundNumber);
      Logger.paragraph();

      this.roundNumber++;

      let result = this.battle(heroes);

      let roundAutoWinner: Hero | null = null;

      while (result.length > 1 || roundAutoWinner) {
        if (result.length < 1) {
          console.error('No winner');
        }

        Logger.paragraph();
        Logger.roundNumber(this.roundNumber);
        Logger.paragraph();

        if (result.length % 2 !== 0 && !roundAutoWinner) {
          roundAutoWinner = result[0];
          result.splice(0, 1);
          result = this.battle(result);

          Logger.autoWinner(roundAutoWinner.firstNameHero, roundAutoWinner.lastNameHero);
        } else if (result.length % 2 !== 0 && roundAutoWinner) {
          result = this.battle([...result, roundAutoWinner]);
          roundAutoWinner = null;
        } else {
          result = this.battle(result);
        }

        this.roundNumber++;
      }

      Logger.paragraphWinner();
      Logger.winnerOfTournament(result[0].firstNameHero, result[0].lastNameHero);
      Logger.paragraphWinner();

      return result;
    } catch (error: unknown) {
      throw console.error(error);
    }
  }

  private makePairs(heroes: Array<Hero>): Hero[][] {
    const pairs = [];

    for (let i = 0; i < heroes.length; i += 2) {
      pairs.push([heroes[i], heroes[i + 1]]);
    }

    return pairs;
  }

  private battle(heroes: Array<Hero>): Array<Hero> {
    const pairs = this.makePairs(heroes);

    const round = new Round(pairs);

    const roundWinners = round.run();

    return roundWinners;
  }
}

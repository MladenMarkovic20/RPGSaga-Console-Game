import Logger from '../View/Logger';
import FrostArrow from '../SpecialAttacks/FrostArrow';
import FireBreath from '../SpecialAttacks/FireBreath';
import StormSeeker from '../SpecialAttacks/StormSeeker';
import { Hero } from '../Models/Hero';
import { Archer } from '../Models/Archer';
import { Warrior } from '../Models/Warrior';
import { LightningWizard } from '../Models/LightningWizard';
import { Peasant } from '../Models/Peasant';
import { Randomiser } from '../Factory/Randomiser';

export class RandomHero {
  private firstNames = ['Anna', 'Elizabeth', 'Martha', 'Ella', 'Chloe', 'Emma', 'Ellie', 'Imogen', 'Alice', 'Sophie'];
  private lastNames = [
    'Mcdonald',
    'Berry',
    'Fernandez',
    'Thompson',
    'Davidson',
    'Ramirez',
    'Stevenson',
    'Burns',
    'Robinson',
    'Kirby',
  ];

  private randomNumberHero(): number {
    const randomHero = Math.round(Math.random() * (4 - 1) + 1);
    return randomHero;
  }

  randomHeroPicker(): Hero {
    const randomiser = new Randomiser();

    const randomNum = this.randomNumberHero();

    const fName = this.firstNames[randomiser.randomName()];
    const lName = this.lastNames[randomiser.randomName()];
    const hp = randomiser.randomHp();
    const ap = randomiser.randomAp();
    const spArcher = FrostArrow.specialAttackDamage(ap);
    const spWarrior = FireBreath.specialAttackDamage(ap);
    const spWizard = StormSeeker.specialAttackDamage(ap);
    const spPeasant = 0;

    switch (randomNum) {
      case 1:
        return new Archer('Archer', fName, lName, hp, ap, spArcher);
      case 2:
        return new Warrior('Warrior', fName, lName, hp, ap, spWarrior);
      case 3:
        return new LightningWizard('LightningWizard', fName, lName, hp, ap, spWizard);
      case 4:
        return new Peasant('Peasant', fName, lName, hp, ap, spPeasant);
      default:
        return new Peasant('Peasant', fName, lName, hp, ap, spPeasant);
    }
  }

  generateHeroes(numberOfHeroes: number): Array<Hero> {
    const contestant: Array<Hero> = [];

    if (numberOfHeroes < 2 || numberOfHeroes % 2 !== 0) {
      Logger.numberOfPlayers();

      process.exit();
    }

    for (let i = 0; i < numberOfHeroes; i++) {
      const obj = this.randomHeroPicker();
      contestant.push(obj);
    }

    return contestant;
  }
}

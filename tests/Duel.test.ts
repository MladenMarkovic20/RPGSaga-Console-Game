import { Duel } from '../src/Controllers/Duel';
import { Archer } from '../src/Models/Archer';
import { Hero } from '../src/Models/Hero';
import { Warrior } from '../src/Models/Warrior';

describe('Duel class tests', () => {
  it('fight()', () => {
    const pair: Array<Hero> = [
      new Archer('Archer', 'Anna', 'Fernandez', 85, 10, 20),
      new Warrior('Warrior', 'Imogen', 'Robinson', 70, 8, 12),
    ];
    const duel = new Duel(pair);

    const spy = jest.spyOn(duel, 'fight');
    duel.fight();

    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith();
  });
});

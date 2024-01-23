import { Duel } from '../src/Controllers/Duel';
import { Archer } from '../src/Models/Archer';
import { Hero } from '../src/Models/Hero';
import { Peasant } from '../src/Models/Peasant';

describe('Exceptions tests in duel class', () => {
  it('Is exception thrown an Error', () => {
    const pair: Array<Hero> = [
      new Archer('Archer', 'Anna', 'Fernandez', 85, 10, 15),
      new Peasant('Warrior', 'Imogen', 'Robinson', 70, 8, 13),
    ];
    const error = () => {
      throw new Error();
    };
    const duel = new Duel(pair);
    const spy = jest.spyOn(duel, 'fight');
    duel.fight();

    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith();
    expect(error).toThrow(Error);
  });
  it('Check Error message', () => {
    const pair: Array<Hero> = [
      new Archer('Archer', 'Anna', 'Fernandez', 85, 10, 15),
      new Peasant('Warrior', 'Imogen', 'Robinson', 70, 8, 13),
    ];
    const error = () => {
      throw new Error("This is Peasant! He can't fight!");
    };
    const duel = new Duel(pair);
    duel.fight();

    expect(error).toThrow("This is Peasant! He can't fight!");
  });
});

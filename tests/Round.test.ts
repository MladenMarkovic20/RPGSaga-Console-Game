import { Round } from '../src/Controllers/Round';
import { Archer } from '../src/Models/Archer';
import { Hero } from '../src/Models/Hero';
import { Warrior } from '../src/Models/Warrior';

describe('Round class tests', () => {
  it('run()', () => {
    const pairs: Hero[][] = [
      [new Archer('Archer', 'Anna', 'Fernandez', 85, 10, 20), new Warrior('Warrior', 'Imogen', 'Robinson', 70, 8, 20)],
    ];
    const round = new Round(pairs);

    const spy = jest.spyOn(round, 'run');
    round.run();

    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith();
  });
});

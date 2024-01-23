import { Game } from '../src/Controllers/Game';
import { Archer } from '../src/Models/Archer';
import { Hero } from '../src/Models/Hero';
import { Warrior } from '../src/Models/Warrior';

describe('Game class tests', () => {
  it('run()', () => {
    const game = new Game();
    const pair: Hero[] = [
      new Archer('Archer', 'Anna', 'Fernandez', 85, 10, 20),
      new Warrior('Warrior', 'Imogen', 'Robinson', 70, 8, 12),
    ];
    const spy = jest.spyOn(game, 'run');
    game.run(pair);
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith(pair);
  });
});

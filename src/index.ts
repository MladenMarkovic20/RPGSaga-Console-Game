// eslint-disable-next-line import/no-extraneous-dependencies
import prompts from 'prompts';

import FileConfig from './Factory/FileConfig';
import { Game } from './Controllers/Game';
import { Hero } from './Models/Hero';
import { RandomHero } from './Factory/RandomHero';

function main(a: Array<Hero>): void {
  const game = new Game();
  game.run(a);
}

(async () => {
  const random = new RandomHero();

  const response = await prompts({
    type: 'text',
    name: 'value',
    message: 'Do you want to load from file [Y/N]?',
  });

  let triedFromFile = false;

  if (response.value === 'Y' || response.value === 'y') {
    const response4 = await prompts({
      type: 'text',
      name: 'value',
      message: 'Please enter path to file:',
    });
    triedFromFile = true;
    const response2: Array<Hero> = FileConfig.readFile(response4.value);

    if (response2) {
      const array: Array<Hero> = [];
      response2.forEach(element => {
        const obj = Object.assign(random.randomHeroPicker(), element);
        array.push(obj);
        return array;
      });
      return main(array);
    }
  }

  const message = triedFromFile
    ? 'There is no file, please enter number of players:'
    : 'Please enter number of players:';
  const response3 = await prompts({
    type: 'number',
    name: 'value',
    message,
    validate: value => (value % 2 === 0 ? true : 'Please enter even number of players'),
  });
  const numberOfHeroes = response3.value;
  const arrayOfContestant = random.generateHeroes(numberOfHeroes);
  FileConfig.createFile('src/LocalData/test.json', arrayOfContestant);
  return main(arrayOfContestant);
})();

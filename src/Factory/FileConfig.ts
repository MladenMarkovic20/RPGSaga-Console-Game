import fs from 'fs';

import { Hero } from '../Models/Hero';

class FileConfig<THero extends Hero> {
  private readingLocalData(path: string) {
    const listOfHeroes = fs.readFileSync(path, 'utf8');
    return JSON.parse(listOfHeroes);
  }
  private creatingLocalData(part: string, listOfHeroes: Array<THero>) {
    const listOfHeroesStingified = JSON.stringify(listOfHeroes, null, 2);
    fs.writeFileSync(part, listOfHeroesStingified, { encoding: 'utf-8', flag: 'w' });
  }

  get readFile() {
    return this.readingLocalData;
  }
  get createFile() {
    return this.creatingLocalData;
  }
}

export default new FileConfig();

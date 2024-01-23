import { Archer } from '../src/Models/Archer';

describe('Archer tests', () => {
  it('Inicial stats of Archer', () => {
    const archer = new Archer('Archer', 'Anna', 'Fernandez', 85, 10, 20);
    expect(archer.typeHero).toMatch('Archer');
    expect(archer.firstName).toMatch('Anna');
    expect(archer.lastName).toMatch('Fernandez');
    expect(archer.healthPointsHero).toBe(85);
    expect(archer.attackPointsHero).toBe(10);
    expect(archer.specialAttackPoints).toBe(20);
    expect(typeof archer.firstName).toBe('string');
    expect(typeof archer.lastName).toBe('string');
    expect(typeof archer.healthPointsHero).toBe('number');
    expect(typeof archer.attackPointsHero).toBe('number');
  });

  it('Archer receive damage', () => {
    const archer = new Archer('Archer', 'Anna', 'Fernandez', 85, 10, 20);
    archer.receiveDamage(30);
    expect(archer.healthPointsHero).toBe(55);
  });

  it('Inicial health point of Archer', () => {
    const archer = new Archer('Archer', 'Anna', 'Fernandez', 85, 10, 20);
    archer.addHp(30);
    expect(archer.healthPointsHero).toBe(30);
  });
});

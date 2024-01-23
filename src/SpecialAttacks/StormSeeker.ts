import { ISpecialAttacks } from '../Apstraction/ISpecialAttacks';

class FrostArrow implements ISpecialAttacks {
  specialAttackDamage(attackPoints: number): number {
    return Math.round(1.35 * attackPoints);
  }
}

export default new FrostArrow();

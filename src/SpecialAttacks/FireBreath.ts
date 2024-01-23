import { ISpecialAttacks } from '../Apstraction/ISpecialAttacks';

class FireBreath implements ISpecialAttacks {
  specialAttackDamage(attackPoints: number): number {
    return Math.round(1.7 * attackPoints);
  }
}

export default new FireBreath();

export abstract class Hero {
  hero: string;
  firstName: string;
  lastName: string;
  healthPoints: number;
  attackPoints: number;
  specialAttackPoints: number;

  constructor(
    hero: string,
    firstName: string,
    lastName: string,
    healthPoints: number,
    attackPoints: number,
    specialAttackPoints: number,
  ) {
    this.hero = hero;
    this.firstName = firstName;
    this.lastName = lastName;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
    this.specialAttackPoints = specialAttackPoints;
  }

  protected set heroType(type: string) {
    this.hero = type;
  }
  protected set fName(name: string) {
    this.firstName = name;
  }
  protected set lName(lName: string) {
    this.lastName = lName;
  }
  protected set healthPoint(hp: number) {
    this.healthPoints = hp;
  }
  protected set attackPoint(ap: number) {
    this.attackPoints = ap;
  }

  get typeHero(): string {
    return this.hero;
  }

  get firstNameHero(): string {
    return this.firstName;
  }

  get lastNameHero(): string {
    return this.lastName;
  }

  get healthPointsHero(): number {
    return this.healthPoints;
  }

  get attackPointsHero(): number {
    return this.attackPoints;
  }

  receiveDamage(damage: number): void {
    this.healthPoints -= damage;
  }

  addHp(hp: number): void {
    this.healthPoints = hp;
  }
}

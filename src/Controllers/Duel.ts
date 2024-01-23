import { Hero } from '../Models/Hero';
import Logger from '../View/Logger';

export class Duel<THero extends Hero> {
  private player1: THero;
  private player2: THero;

  constructor(pair: Array<THero>) {
    this.player1 = pair[0];
    this.player2 = pair[1];
  }

  enemiesForDuel = () => {
    Logger.paragraph();
    Logger.enemies(
      this.player1.firstNameHero,
      this.player2.firstNameHero,
      this.player1.lastNameHero,
      this.player2.lastNameHero,
      this.player1.healthPointsHero,
      this.player2.healthPointsHero,
      this.player1.attackPointsHero,
      this.player2.attackPointsHero,
      this.player1.typeHero,
      this.player2.typeHero,
    );
    Logger.paragraph();
  };

  fight(): THero {
    try {
      this.enemiesForDuel();

      let winner = null;
      const player1Initial = this.player1.healthPointsHero;
      const player2Initial = this.player1.healthPointsHero;

      const dice = function getSpecialAttack(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
      };
      const player1RegularAttack = () => {
        Logger.regularBattle(this.player2.firstNameHero, this.player1.attackPointsHero, this.player2.healthPointsHero);
      };
      const player2RegularAttack = () => {
        Logger.regularBattle(this.player1.firstNameHero, this.player2.attackPointsHero, this.player1.healthPointsHero);
      };
      const player1SpecialAttack = () => {
        Logger.paragraphForSpecialAttack();
        Logger.specialBattle(
          this.player2.firstNameHero,
          this.player1.specialAttackPoints,
          this.player2.healthPointsHero,
        );
        Logger.paragraphForSpecialAttack();
      };

      const player2SpecialAttack = () => {
        Logger.paragraphForSpecialAttack();
        Logger.specialBattle(
          this.player1.firstNameHero,
          this.player2.specialAttackPoints,
          this.player1.healthPointsHero,
        );
        Logger.paragraphForSpecialAttack();
      };

      let firstMove = dice(1, 2);

      while (!winner) {
        const regularOrspecialAttack = dice(1, 6);

        if (this.player1.typeHero === 'Peasant' || this.player2.typeHero === 'Peasant') {
          throw new Error("This is Peasant! He can't fight!");
        }

        // Player 1 move

        if (firstMove === 1) {
          if (1 <= regularOrspecialAttack && regularOrspecialAttack <= 5) {
            this.player2.receiveDamage(this.player1.attackPointsHero);
            player1RegularAttack();
            firstMove = 2;
          } else {
            switch (this.player1.typeHero) {
              case 'Archer':
                this.player2.receiveDamage(this.player1.specialAttackPoints);
                player1SpecialAttack();
                firstMove = 1;
                Logger.skipTurn(this.player2.firstNameHero, this.player1.firstNameHero);
                break;
              case 'Warrior':
                this.player2.receiveDamage(this.player1.specialAttackPoints);
                player1SpecialAttack();
                firstMove = 2;
                break;
              case 'LightningWizard':
                this.player2.receiveDamage(this.player1.specialAttackPoints);
                player1SpecialAttack();
                firstMove = 2;
                break;
              case 'Peasant':
                this.player2.receiveDamage(this.player1.attackPointsHero);
                player1RegularAttack();
                firstMove = 2;
                break;
            }
          }

          // Player 2 move
        } else {
          if (1 <= regularOrspecialAttack && regularOrspecialAttack <= 5) {
            this.player1.receiveDamage(this.player2.attackPointsHero);
            player2RegularAttack();
            firstMove = 1;
          } else {
            switch (this.player2.typeHero) {
              case 'Archer':
                this.player1.receiveDamage(this.player2.specialAttackPoints);
                player2SpecialAttack();
                firstMove = 2;
                Logger.skipTurn(this.player1.firstNameHero, this.player2.firstNameHero);
                break;
              case 'Warrior':
                this.player1.receiveDamage(this.player2.specialAttackPoints);
                player2SpecialAttack();
                firstMove = 1;
                break;
              case 'LightningWizard':
                this.player1.receiveDamage(this.player2.specialAttackPoints);
                player2SpecialAttack();
                firstMove = 1;
                break;
              case 'Peasant':
                this.player1.receiveDamage(this.player2.attackPointsHero);
                player2RegularAttack();
                firstMove = 1;
                break;
            }
          }
        }

        if (this.player2.healthPointsHero <= 0) {
          Logger.paragraph();
          Logger.winnerOfRound(this.player1.firstNameHero, this.player1.lastNameHero);

          this.player1.addHp(player1Initial);
          winner = this.player1;
          return winner;
        }

        if (this.player1.healthPointsHero <= 0) {
          Logger.paragraph();
          Logger.winnerOfRound(this.player2.firstNameHero, this.player2.lastNameHero);

          this.player2.addHp(player2Initial);
          winner = this.player2;
          return winner;
        }
      }

      return winner;
    } catch (error: unknown) {
      Logger.reportError({ message: Logger.getErrorMessage(error) });
      if (this.player1.typeHero === 'Peasant') {
        Logger.winnerOfRound(this.player2.firstNameHero, this.player2.lastNameHero);
        return this.player2;
      } else if (this.player2.typeHero === 'Peasant') {
        Logger.winnerOfRound(this.player1.firstNameHero, this.player1.lastNameHero);
        return this.player1;
      } else {
        return this.player1.healthPointsHero > this.player2.healthPointsHero ? this.player1 : this.player2;
      }
    }
  }
}

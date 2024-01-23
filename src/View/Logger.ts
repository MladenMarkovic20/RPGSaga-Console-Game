import Winston from './Winston';

class Logger {
  numberOfPlayers(): void {
    Winston.welcomeComments.error(`Rule is to be minimum 2 players and number of players must be even!`);
  }

  greeting(roundNumber: number): void {
    Winston.welcomeComments.info(`Welcome to Game! Let's the tornament start! Round ${roundNumber}, fight!`);
  }

  roundNumber(roundNumber: number): void {
    Winston.welcomeComments.debug(`Round number ${roundNumber}, fight!`);
  }

  autoWinner(autoWinnerFirstName: string, autoWinnerLastName: string): void {
    Winston.welcomeComments.info(`Direct go to final:, ${autoWinnerFirstName} ${autoWinnerLastName}`);
  }

  winnerOfTournament(winnerFirstName: string, winnerLastName: string): void {
    Winston.welcomeComments.warn(`Winner of tournament is: ${winnerFirstName} ${winnerLastName}`);
  }

  enemies(
    player1FirstName: string,
    player2FirstName: string,
    player1LastName: string,
    player2LastName: string,
    player1HP: number,
    player2HP: number,
    player1AP: number,
    player2AP: number,
    player1Type: string,
    player2Type: string,
  ): void {
    Winston.welcomeComments.warn(
      `${player1FirstName} ${player1LastName} [ ${player1Type} || ${player1HP} HP || ${player1AP} AP ] ` +
        `\nVS` +
        ` ${player2FirstName} ${player2LastName} [ ${player2Type} || ${player2HP} HP || ${player2AP} AP ]`,
    );
  }

  regularBattle(player2: string, player1AP: number, player2HP: number): void {
    Winston.regularDuelComments.info(
      `${player2} received attack that deals ${player1AP} points of damage. Remaining HP is: ${
        player2HP <= 0 ? 0 : player2HP
      }`,
    );
  }
  specialBattle(player2: string, player1AP: number, player2HP: number): void {
    Winston.specialDuelComments.verbose(
      `${player2} received special attack that deals ${player1AP} points of damage.` +
        `\n` +
        `Remaining HP is: ${player2HP <= 0 ? 0 : player2HP}`,
    );
  }
  skipTurn(player1: string, player2: string): void {
    Winston.welcomeComments.debug(
      `${player1}  ➶➶➶➶➶➶➶➶➶➶➶➶➶➶➶➶➶➶➶ skip turn, again attack ➷➷➷➷➷➷➷➷➷➷➷➷➷➷➷➷➷➷➷➷  ${player2}`,
    );
  }

  winnerOfRound(playerFirstName: string, playerLastName: string): void {
    Winston.welcomeComments.warn(`Winner:  ${playerFirstName} ${playerLastName}`);
  }

  paragraph(): void {
    Winston.welcomeComments.error('---------------------------------------------------------------------------------');
  }
  paragraphWinner(): void {
    Winston.welcomeComments.warn('-------【w】-------【i】-------【n】---------【n】-------【e】-------【r】-------');
  }
  paragraphForSpecialAttack(): void {
    Winston.welcomeComments.verbose('↤↤↤↤↤↤↤↤↤↤↤↤↤↤↤↤↤↤↤↤↤↤↤↤↤↤↤↤↤↤↤↤ sᴘᴇᴄɪᴀʟ ᴀᴛᴛᴀᴄᴋ ↦↦↦↦↦↦↦↦↦↦↦↦↦↦↦↦↦↦↦↦↦↦↦↦↦↦↦↦↦↦↦↦');
  }

  getErrorMessage(error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
    return String(error);
  }

  reportError = ({ message }: { message: string }) => {
    Winston.exceptionComment.error(message);
  };
}

export default new Logger();

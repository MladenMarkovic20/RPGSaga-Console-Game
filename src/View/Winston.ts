/* eslint-disable import/namespace */
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import * as winston from 'winston';

class Winston {
  welcomeNote = winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.printf(info => `${info.message}`),
  );

  welcomeComments = winston.createLogger({
    format: winston.format.json(),
    level: 'silly',
    levels: winston.config.npm.levels,
    transports: [
      new winston.transports.Console({
        format: this.welcomeNote,
      }),
    ],
  });

  duelNote = winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.printf(info => `Turn: ${info.message}`),
  );

  regularDuelComments = winston.createLogger({
    format: winston.format.json(),
    level: 'silly',
    levels: winston.config.npm.levels,
    transports: [
      new winston.transports.Console({
        format: this.duelNote,
      }),
    ],
  });
  duelNoteSP = winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.printf(info => `Special attack!: ${info.message}`),
  );

  specialDuelComments = winston.createLogger({
    format: winston.format.json(),
    level: 'silly',
    levels: winston.config.npm.levels,
    transports: [
      new winston.transports.Console({
        format: this.duelNoteSP,
      }),
    ],
  });
  exception = winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.printf(info => `Game warning!: ${info.message}`),
  );

  exceptionComment = winston.createLogger({
    format: winston.format.json(),
    level: 'silly',
    levels: winston.config.npm.levels,
    transports: [
      new winston.transports.Console({
        format: this.exception,
      }),
    ],
  });
}

export default new Winston();

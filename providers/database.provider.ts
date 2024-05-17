import { User_Model } from 'models/User_Model';
import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        logging: false,
      });
      sequelize.addModels([User_Model]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

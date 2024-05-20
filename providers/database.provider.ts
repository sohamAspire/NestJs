import { Car_Model } from 'models/Car_Model';
import { User_Model } from 'models/User_Model';
import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT as unknown as number,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        logging: false,
      });
      sequelize.addModels([User_Model, Car_Model]);
      await sequelize.sync({ alter : true});
      return sequelize;
    },
  },
];

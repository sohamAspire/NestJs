import { Car_Model } from 'models/Car_Model';

export const CarsProviders = [
  {
    provide: 'CARS_REPOSITORY',
    useValue: Car_Model,
  },
];

import { User_Model } from 'models/User_Model';

export const UserProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User_Model,
  },
];

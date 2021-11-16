import { UserEntity } from './user.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: UserEntity,
  },
];
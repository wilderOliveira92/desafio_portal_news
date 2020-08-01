import { container } from 'tsyringe';

import '@modules/users/providers';
import INewsRepository from '@modules/news/repositories/INewsRepository';
import NewsRepository from '@modules/news/infra/typeorm/repositories/NewsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<INewsRepository>('NewsRepository', NewsRepository);

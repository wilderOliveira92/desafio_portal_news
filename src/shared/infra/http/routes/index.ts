import { Router } from 'express';

import newsRoutes from '@modules/news/infra/http/routes/news.routes';
import usersRoutes from '@modules/users/infra/http/routes/users.routes';
import sessionRoutes from '@modules/users/infra/http/routes/session.routes';

const routes = Router();

routes.use('/news', newsRoutes);
routes.use('/user', usersRoutes);
routes.use('/auth', sessionRoutes);

export default routes;

import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import NewsController from '../controllers/NewsController';

const newsRouter = Router();
const newsController = new NewsController();

newsRouter.use(ensureAuthenticated);

newsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      content: Joi.string().required(),
      publication: Joi.date().required(),
    },
  }),
  newsController.create,
);

newsRouter.get('/:id', newsController.show);
newsRouter.get('/', newsController.index);
newsRouter.delete('/:id', newsController.delete);
newsRouter.patch(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string(),
      content: Joi.string(),
      publication: Joi.date(),
    },
  }),
  newsController.update,
);

export default newsRouter;

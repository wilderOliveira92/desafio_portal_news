import producerRouter from '@modules/producer/routes';
import { Router } from 'express';

const routes = Router();
routes.use('/producer', producerRouter);
routes.get('/', (req, res ) => {
    res.send('OK')
} )

export default routes;

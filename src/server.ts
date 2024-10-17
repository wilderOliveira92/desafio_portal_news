import { AppDataSource } from '@config/database/database';
import app from './shared/infra/http/server';


AppDataSource.initialize().then(() => {
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
});
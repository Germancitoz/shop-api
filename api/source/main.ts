import { startServer } from './server';
import { startDatabase, closeDatabase } from './services/database';
import { showTitle } from './lib/title';

(async () => {
  await showTitle('Shop-API');
  try {
    console.log('init server');
    startServer();
    console.log('end server');
    console.log('init database');
    await startDatabase();
    console.log('end database');
  } catch (error) {
    console.error(error);
    closeDatabase();
    process.exit(1);
  }
})();

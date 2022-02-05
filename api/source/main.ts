import { startServer } from './server';
import { startDatabase, closeDatabase } from './services/database';
import { showTitle } from './lib/title';

(async () => {
  await showTitle('Shop-API');
  try {
    startServer();
    await startDatabase();
  } catch (error) {
    console.error(error);
    closeDatabase();
    process.exit(1);
  }
})();

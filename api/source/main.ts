import { showTitle } from './lib/title';
import { startServer } from './server';
import { closeDatabase, startDatabase } from './services/database';

(async () => {
  await showTitle('Shop-API');
  try {
    await startServer();
    await startDatabase();
  } catch (error) {
    console.error(error);
    closeDatabase();
    process.exit(1);
  }
})();

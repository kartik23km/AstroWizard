import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, '../../db.json');

const defaultData = { users: [] };
const adapter = new JSONFile(file);
const db = new Low(adapter, defaultData);

export const initDB = async () => {
  try {
    await db.read();
    // Ensure structure matches defaults
    db.data = db.data || defaultData;
    db.data.users = db.data.users || [];
    await db.write();
    console.log('Database initialized successfully.');
  } catch (error) {
    console.error('Failed to initialize database:', error);
    throw error;
  }
};

export { db };

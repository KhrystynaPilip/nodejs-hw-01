import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const allContacts = await fs.readFile(PATH_DB, 'utf8');

    return allContacts ? JSON.parse(allContacts) : [];
  } catch (err) {
    console.error('Reading file error:', err);
  }
};

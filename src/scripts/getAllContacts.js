import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const allContacts = await readContacts();
    console.log('All your contacts:', allContacts);
  } catch (err) {
    console.error('Error with getting all contacts', err);
  }
};

await getAllContacts();

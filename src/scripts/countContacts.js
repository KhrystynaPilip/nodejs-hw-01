import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const allContacts = await readContacts();
    const numberOfContacts = allContacts.length;
    console.log(`You have ${numberOfContacts} contacts`);
  } catch (err) {
    console.error('Error count contacts', err);
  }
};

await countContacts();

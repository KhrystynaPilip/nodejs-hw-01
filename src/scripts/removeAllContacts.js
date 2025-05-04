import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('All your contacts was successfully deleted');
  } catch (err) {
    console.error('Something went wrong...', err);
  }
};

removeAllContacts();

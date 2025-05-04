import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const allContacts = await readContacts();
    if (allContacts.length > 0) {
      allContacts.pop();

      await writeContacts(allContacts);
      console.log('Last contact was successfully deleted');
    } else {
      console.log('You dont have any contacts yet');
    }
  } catch (err) {
    console.error('Error with removing of last contact:', err);
  }
};
removeLastContact();

import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const allContacts = await readContacts();

    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();

      allContacts.push(newContact);
    }

    await writeContacts(allContacts);
    console.log(`${number} contacts added successfully.`);
  } catch (err) {
    console.error('Error generating contacts:', err);
  }
};

generateContacts(5);

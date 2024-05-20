import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    let contacts = [];
    if (fs.existsSync(PATH_DB)) {
      const data = fs.readFileSync(PATH_DB, 'utf-8');
      contacts = JSON.parse(data);
    }
    const newContact = createFakeContact();
    contacts.push(newContact);
    fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 4));
    console.log(`Contact added to ${PATH_DB}`);
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

await addOneContact();

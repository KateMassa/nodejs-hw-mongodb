import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs';

export const generateContacts = async (number) => {
  try {
    let contacts = [];
    if (fs.existsSync(PATH_DB)) {
      const data = fs.readFileSync(PATH_DB, 'utf-8');
      contacts = JSON.parse(data);
    }
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }
    fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 4));
    console.log(`${number} contacts generated and added to ${PATH_DB}`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

await generateContacts(5);

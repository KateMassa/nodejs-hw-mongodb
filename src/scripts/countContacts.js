import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';

export const countContacts = async () => {
  try {
    let contacts = [];
    if (fs.existsSync(PATH_DB)) {
      const data = fs.readFileSync(PATH_DB, 'utf-8');
      contacts = JSON.parse(data);
    }
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
    return 0;
  }
};

console.log(await countContacts());

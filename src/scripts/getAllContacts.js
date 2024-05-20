import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';

export const getAllContacts = async () => {
  try {
    let contacts = [];
    if (fs.existsSync(PATH_DB)) {
      const data = fs.readFileSync(PATH_DB, 'utf-8');
      contacts = JSON.parse(data);
    }
    return contacts;
  } catch (error) {
    console.error('Error getting contacts:', error);
    return [];
  }
};

console.log(await getAllContacts());

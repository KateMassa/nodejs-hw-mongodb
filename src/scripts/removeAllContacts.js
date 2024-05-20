import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';

export const removeAllContacts = async () => {
  try {
    if (fs.existsSync(PATH_DB)) {
      fs.writeFileSync(PATH_DB, '[]');
      console.log(`All contacts removed from ${PATH_DB}`);
    } else {
      console.log(`No contacts found in ${PATH_DB}`);
    }
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

await removeAllContacts();

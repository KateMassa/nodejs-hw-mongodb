import { ContactsCollection } from '../db/contact.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (contact) => {
  const newContact = await ContactsCollection.create(contact);
  return newContact;
};

export const deleteContact = async (contactId) => {
  const deletedContact = await ContactsCollection.findOneAndDelete({
    _id: contactId,
  });
  return deletedContact;
};

export const updateContact = async (contactId, contact, options = {}) => {
  const updatedContact = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    contact,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );
  if (!updatedContact || !updatedContact.value) {
    return null;
  }
  return {
    contact: updatedContact,
    isNew: Boolean(updatedContact?.lastErrorObject?.upserted),
  };
};

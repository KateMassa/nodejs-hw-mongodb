import {
  getAllContacts,
  getContactById,
  createContact,
  deleteContact,
  updateContact,
} from '../services/contacts';
import createHttpError from 'http-errors';

export const getAllContactsController = async (req, res) => {
  const contacts = await getAllContacts();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  if (!/^\d+$/.test(contactId)) {
    next(createHttpError(400, 'Invalid contact ID'));
    return;
  }
  const contact = await getContactById(contactId);
  if (!contact) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }
  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};

export const createContactController = async (req, res) => {
  const newContact = await createContact(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created contact!',
    data: newContact,
  });
};

export const deleteContactController = async (req, res, next) => {
  const { contactId } = req.params;
  if (!/^\d+$/.test(contactId)) {
    next(createHttpError(400, 'Invalid contact ID'));
    return;
  }
  const deletedContact = await deleteContact(contactId);
  if (!deletedContact) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }
  res.status(200).json({
    status: 200,
    message: `Successfully deleted contact with id ${contactId}!`,
    data: deletedContact,
  });
};

export const updateContactController = async (req, res, next) => {
  const { contactId } = req.params;
  if (!/^\d+$/.test(contactId)) {
    next(createHttpError(400, 'Invalid contact ID'));
    return;
  }
  const updatedContact = await updateContact(contactId, req.body, {
    upsert: true,
  });
  if (!updatedContact) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }
  res.status(200).json({
    status: 200,
    message: `Successfully upserted contact with id ${contactId}!`,
    data: updatedContact.contact,
  });
};

export const patchContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body);
  if (!result) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }
  res.json({
    status: 200,
    message: `Successfully patched contact with id ${contactId}!`,
    data: result.contact,
  });
};

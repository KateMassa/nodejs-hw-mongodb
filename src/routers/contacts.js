import { Router } from 'express';

import {
  getContactsController,
  getContactByIdController,
  createContactController,
  deleteContactController,
  updateContactController,
  patchContactController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { validateBody } from '../middlewares/validateBody.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

// router.use(authenticate);

router.get('/contacts', authenticate, ctrlWrapper(getContactsController));

router.get(
  '/contacts/:contactId',
  authenticate,
  ctrlWrapper(getContactByIdController),
);

router.post(
  '/contacts',
  authenticate,
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.delete(
  '/contacts/:contactId',
  authenticate,
  ctrlWrapper(deleteContactController),
);

router.put(
  '/contacts/:contactId',
  authenticate,
  validateBody(updateContactSchema),
  ctrlWrapper(updateContactController),
);

router.patch(
  '/contacts/:contactId',
  authenticate,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

export default router;

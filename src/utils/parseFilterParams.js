const parsePhoneNumber = (phoneNumber) => {
  const isString = typeof phoneNumber === 'string';
  if (!isString) return;
  const parsedNumber = parseInt(phoneNumber);
  if (Number.isNaN(parsedNumber)) {
    return;
  }
  return parsedNumber;
};

const parseIsFavourite = (isFavourite) => {
  const isBoolean = typeof isFavourite === 'boolean';
  if (!isBoolean) return;
};

const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const parsedContactType = contactType.toLowerCase();
  if (!['work', 'personal', 'home'].includes(parsedContactType)) {
    return;
  }
  return parsedContactType;
};

export const parseFilterParams = (query) => {
  const { number, isFavourite, contactType } = query;

  const parsedNumber = parsePhoneNumber(number);
  const parsedIsFavourite = parseIsFavourite(isFavourite);
  const parsedContactType = parseContactType(contactType);

  return {
    number: parsedNumber,
    isFavourite: parsedIsFavourite,
    contactType: parsedContactType,
  };
};

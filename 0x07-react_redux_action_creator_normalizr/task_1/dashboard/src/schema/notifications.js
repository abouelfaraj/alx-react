import * as notificationsDt from '../../notifications.json';
import { normalize, schema } from 'normalizr';

export const getAllNotificationsByUser = (userId) => {
  return notificationsDt.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
};

const user = new schemaEntity('user');

const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid',
  }
);

const notification = new schema.Entity('', {
  author: user,
  context: message,
});

const normalized = normalize(notificationsDt.default, [notification]);

export { normalized };

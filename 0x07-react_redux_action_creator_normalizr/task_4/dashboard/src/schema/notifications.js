import * as notificationsDt from '../../notifications.json';
import { normalize, schema } from 'normalizr';

export const getAllNotificationsByUser = (userId) => {
  const notif = normalized.entities.notifications;
  const msg = normalized.entities.messages;
  const notifByUser = [];

  for (const n in notifications) {
    if (notifications[n].author === userId) {
      notifByUser.push(messages[notifications[n].context]);
    }
  }

  return notifByUser;
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

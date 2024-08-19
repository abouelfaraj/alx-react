import * as [notificationsDt] from '../../notifications.json';

export const getAllNotificationsByUser = (userId) => {
  return notificationsDt.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
}

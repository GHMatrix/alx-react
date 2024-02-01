import { normalize, schema } from 'normalizr';
import * as notificationData from "../../../../notifications.json";

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export default function getAllNotificationsByUser(userId) {
  const normalizedData = normalize(notificationData, [notification]);
  return normalizedData;
}

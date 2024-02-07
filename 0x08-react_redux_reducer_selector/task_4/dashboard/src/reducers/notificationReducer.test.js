import notificationReducer from '../reducers/notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const initialState = Map({
      filter: 'DEFAULT',
      notifications: Map()
    });
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const notificationsData = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: "New data available" }
    ];
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: notificationsData };
    const normalizedNotifications = notificationsNormalizer(notificationsData).entities.notifications;
    const expectedState = Map({
      filter: 'DEFAULT',
      notifications: Map(normalizedNotifications)
    });
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const initialState = Map({
      filter: 'DEFAULT',
      notifications: Map()
    });
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = Map({
      filter: 'URGENT',
      notifications: Map()
    });
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = Map({
      filter: 'DEFAULT',
      notifications: Map({
        1: { id: 1, isRead: false, type: "default", value: "New course available" },
        2: { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        3: { id: 3, isRead: false, type: "urgent", value: "New data available" }
      })
    });
    const action = { type: MARK_AS_READ, index: 2 };
    const expectedState = Map({
      filter: 'DEFAULT',
      notifications: Map({
        1: { id: 1, isRead: false, type: "default", value: "New course available" },
        2: { id: 2, isRead: true, type: "urgent", value: "New resume available" },
        3: { id: 3, isRead: false, type: "urgent", value: "New data available" }
      })
    });
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});

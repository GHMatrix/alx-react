import React from "react";
import { shallow } from "enzyme";
import { getLatestNotification } from "../utils/utils";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

describe("Notification tests", () => {
  it("renders Notification component without crashing", () => {
    const wrapper = shallow(<Notifications markNotificationAsRead={() => {}} />);

    expect(wrapper).toBeDefined();
  });

  it("renders correct list items", () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} markNotificationAsRead={() => {}} />
    );
    expect(wrapper.find("ul").children()).toHaveLength(listNotifications.length);
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
    expect(wrapper.find("ul").childAt(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
    expect(wrapper.find("ul").childAt(1).html()).toEqual('<li data-notification-type="urgent">New resume available</li>');
    expect(wrapper.find("ul").childAt(2).html()).toEqual(
      `<li data-urgent=\"true\">${getLatestNotification()}</li>`
    );
  });

  it("renders an unordered list", () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} markNotificationAsRead={() => {}} />
    );
    expect(wrapper.find("ul").children()).toHaveLength(3);
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });

  it("renders correct text", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} markNotificationAsRead={() => {}} />);

    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(false);
  });

  it("does not display notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} markNotificationAsRead={() => {}} />);

    expect(wrapper.find("div.Notifications").exists()).toBe(false);
  });

  it("does not display menuItem when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} markNotificationAsRead={() => {}} />);

    expect(wrapper.find("div.menuItem").exists()).toBe(false);
  });

  it("displays Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} markNotificationAsRead={() => {}} />);

    expect(wrapper.find("div.Notifications").exists()).toBe(false);
  });

  it("renders correctly when listCourses is not passed", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} markNotificationAsRead={() => {}} />);

    expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
  });

  it("renders correctly when empty array is passed", () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} markNotificationAsRead={() => {}} />
    );

    expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
  });

  it("renders correctly when listNotifications is passed and with the right number of notifications", () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} markNotificationAsRead={() => {}} />
    );

    expect(wrapper.find("ul").children()).toHaveLength(3);
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });

  it('renders "No new notifications for now" instead of "Here is the list of notifications" when listNotifications is empty', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} markNotificationAsRead={() => {}} />
    );

    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBe(false);

    expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
  });

  it("doesnt re-render when the list passed as prop is the same", () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} markNotificationAsRead={() => {}} />
    );

    expect(wrapper.instance().shouldComponentUpdate(listNotifications)).toBe(false);
  });

  it("re-renders if listNotifications if listNotifications is changed", () => {
    const newListNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "default", html: getLatestNotification() },
      { id: 4, type: "default", value: "Foo" },
    ];

    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} markNotificationAsRead={() => {}} />
    );

    expect(wrapper.instance().shouldComponentUpdate(newListNotifications)).toBe(true);
  });
});

describe("onclick event behaves as it should", () => {
  it("should call markNotificationAsRead", () => {
    const wrapper = shallow(<Notifications markNotificationAsRead={() => {}} />);
    const spy = jest.spyOn(wrapper.instance().props, "markNotificationAsRead");

    wrapper.instance().forceUpdate();
    wrapper.find(NotificationItem).first().simulate("click");
    expect(spy).toHaveBeenCalled();
  });
});

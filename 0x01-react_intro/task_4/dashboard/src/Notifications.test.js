import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";

describe("Notification Componeent Tests", () => {
  it("Renders without crashing", () => {
    const Notification = shallow(<Notifications />);
    expect(Notification).toBeDefined();
  });
  it("renders ul", () => {
    const Notification = shallow(<Notifications />);

    expect(app.find("ul")).toBeDefined();
  });
  it("renders three list items", () => {
    const Notification = shallow(<Notifications />);

    expect(app.find("li")).toHaveLength(3);
  });
  it("renders correct text", () => {
    const Notification = shallow(<Notifications />);

    expect(Notification.find("p").text()).toBe("Here is the list of notifications");
  });
});

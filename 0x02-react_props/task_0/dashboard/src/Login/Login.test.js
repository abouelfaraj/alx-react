import Login from "./Login";
import React from "react";
import { shallow } from "enzyme";

describe("Login tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should render 2 labels and 2 inputs", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input")).toHaveLength(2);
    expect(wrapper.find("label")).toHaveLength(2);
  })
});
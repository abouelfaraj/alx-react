import Header from "./Header";
import React from "react";
import { shallow } from "enzyme";

describe("Header tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });
});

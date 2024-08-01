import Footer from "./Footer";
import React from "react";
import { shallow } from "enzyme";

describe("Footer tests", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toEqual(true);
    });
    it("should render the text Copyright", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);

    })
});
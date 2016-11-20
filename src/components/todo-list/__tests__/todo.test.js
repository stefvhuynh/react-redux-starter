import React from "react";
import { shallow } from "enzyme";
import Todo from "../todo";

const setup = (props) => {
  return {
    props,
    wrapper: shallow(<Todo {...props}/>)
  };
};

describe("Todo", () => {
  it("renders the name of the todo", () => {
    const { props, wrapper } = setup({ name: "do stuff" });
    expect(wrapper.text()).toEqual(props.name);
  });
});

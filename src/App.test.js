import React from "react";
import * as rtl from "@testing-library/react";
import App from "./App";

describe("App", () => {
  let wrapper;

  afterEach(rtl.cleanup);
  beforeEach(() => {
    wrapper = rtl.render(<App />);
  });

  it('displays button', () => {
      const dropDownOnLoad = button.queryByText('Select a season')
      expect(dropDownOnLoad).toBeInTheDocument()
  })

  it("displays text on the homepage", () => {
    const strangerThingsText = app.queryByText("Stranger Things");
  });

  it("opens dropdown to select a season", () => {
    const dropDownMenu = app.queryByText("Select a season");
    rtl.fireEvent.click(dropDownMenu);
    expect(dropDownMenu).toBeCalled();
  });

  it('expect app component to display', async () => {
    const text = await wrapper.findByText('Select a season');
    expect(text).toBeInTheDocument()
})
});
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


});
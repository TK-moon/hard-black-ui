import React from "react";
import App from "./App";

export default {
  title: "Test",
  component: App,
  parameters: {
    componentSubtitle: "App Component",
  },
};

export const defaultButton = () => {
  return <App />;
};

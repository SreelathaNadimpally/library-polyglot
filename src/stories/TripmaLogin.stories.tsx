import React from "react";
import { action } from "@storybook/addon-actions";
import TripmaLogin from "../components/TripmaLogin"; 

export default {
  title: "TripmaLogin",
  component: TripmaLogin,
};

export const Default = () => (
  <TripmaLogin
    onLogin={action("Login button clicked")}
  />
);

Default.story = {
  name: "Default",
};

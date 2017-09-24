import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import RandomButton from "../src/components/RandomButton/RandomButton";
import dogNames from "dog-names";

storiesOf("RandomButton", module).add("default", () => (
  <RandomButton variants={dogNames.all} />
));

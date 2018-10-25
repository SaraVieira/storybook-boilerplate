import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import WrappedButton from "../src/components/WrappedButton/WrappedButton";

storiesOf("WrappedButton", module)
  .add("with text", () => (
    <WrappedButton onClick={action("clicked")}>
      Hello WrappedButton
    </WrappedButton>
  ))
  .add("with some emoji", () => (
    <WrappedButton onClick={action("clicked")}>😀 😎 👍 💯</WrappedButton>
  ))
  .add("with deeppink", () => (
    <WrappedButton size="large" color="deeppink">
      Click Me
    </WrappedButton>
  ));

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import PushButton from "../src/components/PushButton/PushButton";

storiesOf("PushButton", module)
  .add("default", () => <PushButton>I am a PushButton</PushButton>)
  .add("large", () => <PushButton size="large">I am a PushButton</PushButton>)
  .add("color", () => (
    <PushButton color="#BADA55">I am a PushButton</PushButton>
  ));

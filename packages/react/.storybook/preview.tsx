import type { Preview } from "@storybook/react-vite";
import { IconSprite } from "../src";

import "@luukbrauckmann/styles/a11y.css";
import "@luukbrauckmann/styles/reset.css";
import "@luukbrauckmann/styles/storybook.css";
import "@luukbrauckmann/styles/typography.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <Story />
        <IconSprite hidden />
      </>
    ),
  ],
};

export default preview;

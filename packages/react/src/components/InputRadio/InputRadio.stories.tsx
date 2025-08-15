import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputRadio } from "./InputRadio";

const meta = {
  title: "Components/InputRadio",
  component: InputRadio,
} satisfies Meta<typeof InputRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Option",
  },
};

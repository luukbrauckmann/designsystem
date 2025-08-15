import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputText } from './InputText';

const meta = {
  title: 'Components/InputText',
  component: InputText
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

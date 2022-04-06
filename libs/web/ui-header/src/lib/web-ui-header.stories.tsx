import { Story, Meta } from '@storybook/react';
import { Header, HeaderProps } from './web-ui-header';

export default {
  component: Header,
  title: 'nowy Header',
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
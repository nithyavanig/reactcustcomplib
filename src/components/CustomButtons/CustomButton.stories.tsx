import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CustomButton from './CustomButton';

export default {
    title: 'ReactComponentLibrary/CustomButton',
    component: CustomButton
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => <CustomButton {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    text: 'Hello world!'
};

export const ClickMe = Template.bind({});
ClickMe.args = {
    text: 'Click me!'
};

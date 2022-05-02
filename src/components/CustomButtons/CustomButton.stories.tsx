import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CustomButton from './CustomButton';

export default {
    title: 'ReactComponentLibrary/CustomButton',
    component: CustomButton
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => <CustomButton {...args} />;

// Sub-Story 1/ Template -1 for Custom Button
export const HelloWorld = Template.bind({});

HelloWorld.args = {
    text: 'Hello world!'
};

//  Template-2 for Custom Button
export const ClickMe = Template.bind({});
ClickMe.args = {
    text: 'Click me!'
};

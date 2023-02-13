

import { Box } from '@mui/material'
import { ComponentStory } from '@storybook/react';
import { TimeToRead } from './TimeToRead'


export default {
    title: 'Molecules/TimeToRead',
    component: Box
}

const styles = {
    marginTop: '17px', 
    marginLeft: '16px', 
    width: '115px'
}

const Template: ComponentStory<typeof TimeToRead> = (args) => <TimeToRead {...args} />;

export const Primary = Template.bind({})

Primary.args={
    style: styles,
    text: '13-minute read'
}


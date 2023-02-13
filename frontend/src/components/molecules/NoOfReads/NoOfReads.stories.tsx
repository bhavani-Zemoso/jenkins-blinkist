
import { Box } from '@mui/material'
import { ComponentStory } from '@storybook/react';
import { NoOfReads } from './NoOfReads'


export default {
    title: 'Molecules/NoOfReads',
    component: Box
}

const styles = {
    marginTop: '17px', 
    marginLeft: '30px',
}

const Template: ComponentStory<typeof NoOfReads> = (args) => <NoOfReads {...args} />;

export const Primary = Template.bind({})

Primary.args={
    style: styles,
    text: '1.9k reads'
}


import { Box } from '@mui/material'
import { ComponentStory } from '@storybook/react';
import { SearchBar } from './SearchBar'


export default {
    title: 'Molecules/SearchBar',
    component: Box
}

const styles = {
    marginTop: '17px', 
    marginLeft: '30px',
}

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar />;

export const Primary = Template.bind({})
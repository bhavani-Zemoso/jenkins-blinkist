
import { Box, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import { theme } from '../../../Themes/theme'
import { TabPanelComponent } from './TabPanel'
import { ComponentStory, ComponentMeta } from '@storybook/react'; 

export default {
    title: 'Organisms/TabPanel',
    component: Box,
    decorators: [(story: any) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>],
}

const Template: ComponentStory<typeof TabPanelComponent> = (args) => <TabPanelComponent {...args} />;

const readPanelStyles = {
    width:'912px'

}

const BookViewPanelStyles = {
    width: '600px'
}

const tabDataBook = [
    {
        "label": "Synopsis",
        "value": "Synopsis",
    },
    {
        "label": "Who is it for?",
        "value": "Who is it for?",
    },
    {
        "label": "About the author",
        "value": "About the author",
    }
]

const tabData = [
    {
        'label': 'Currently reading',
        'value' : "Currently reading",
    },
    {
        'label': 'Finished',
        'value': 'Finished',
    }
];

 const StateFunction = () => {
    const [currentState, setCurrentState] = useState(tabData[0].value);
    const handleState = (state:string) => {
        setCurrentState(state);
    }
} 


export const ReadPanel = Template.bind({})
ReadPanel.args = {
    style: readPanelStyles,
    tabData: tabData,

}

export const BookViewPanel = Template.bind({})
BookViewPanel.args = {
    style: BookViewPanelStyles,
    tabData: tabDataBook
}
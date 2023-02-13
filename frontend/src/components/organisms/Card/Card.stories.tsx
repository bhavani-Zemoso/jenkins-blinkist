
import { Box, ThemeProvider } from '@mui/material'
import { theme } from '../../../Themes/theme'
import { CardComponent } from './Card'
import { ComponentStory} from '@storybook/react'; 

export default {
    title: 'Organisms/Card',
    component: Box,
    decorators: [(story: any) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>],
}

const Template: ComponentStory<typeof CardComponent> = (args) => <CardComponent {...args} />;

export const FinishedBook = Template.bind({})

FinishedBook.args = {
    image: 'https://i.ibb.co/HLcRRLs/8.png',
    bookName: 'Eat Better, Feel Better',
    author: 'Giada De Laurentiis',
    time: '13-minute read',
    noOfReads: "1.9k reads",
    readStatus: "Finished",
    page: "Library",
    progress: 100,
}

export const AddToLibraryBook = Template.bind({})

AddToLibraryBook.args = {
    image: 'https://i.ibb.co/WgMd7j0/9.png',
    bookName: 'DropShipping',
    author: 'James Moore',
    time: '12-minute read',
    noOfReads: '',
    readStatus: "",
    page: 'AllBooks',
    progress: 40
}
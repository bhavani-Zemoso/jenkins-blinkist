import {TabContext, TabList} from '@mui/lab';
import { Box, Tab, ThemeProvider, styled} from "@mui/material";
import React, { useState } from "react";
import {theme} from '../../../Themes/theme';

const StyledTabList = styled(TabList)({
    borderBottom: '1px solid #E1ECFC',
    alignItems: 'flex-start !important',
})

const StyledTabRead = styled(Tab)({
    textTransform: 'none',
    width: '304px',
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '22px',
    alignItems: 'flex-start !important',
})

const StyledTabBook = styled(Tab)({
    textTransform: 'none',
    width: '200px',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '20px',
    alignItems: 'flex-start !important',
    '&.Mui-selected': {
        color: theme.palette.textcolor.main,
    },
})

type PropsType = {
    style: Object,
    stateHandler: Function,
    tabData: {
        value: string,
        label: string,
    }[],
    children?: React.ReactNode
}

export const TabPanelComponent = (props: PropsType) => {
    
    const {style, stateHandler, tabData} = props;

    const [value, setValue] = useState(tabData && tabData[0].value)
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        stateHandler(newValue);
    };

    let count = 0;

    const renderTabs = () => {
        if(tabData[0].value === 'Currently reading')
        {
            return(
                tabData.map((data: any) => {
                    return(
                        <StyledTabRead label={data.label} value={data.value} wrapped={true} data-testid={`tab-${count++}`}/>
                    )
                })
            )
        }

        else
        {
            return(
                tabData.map((data: any) => {
                    return(
                        <StyledTabBook label={data.label} value={data.value} wrapped={true} data-testid={`tab-${count++}`}/>
                    )
                })
            )
        }   
    }

    return(
        <ThemeProvider theme={theme}>
            <Box sx={{width: '1440px'}} style={style}>
            <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <StyledTabList data-testid = "tablist" aria-label="Tabs" onChange={handleChange} value={tabData && tabData[0].value} textColor='primary' indicatorColor='primary' >
                        {
                            renderTabs()
                        }
                    </StyledTabList>
                </Box>
            </TabContext>
        </Box>
        </ThemeProvider>
        
    )
}
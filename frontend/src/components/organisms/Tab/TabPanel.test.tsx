
import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';

import { TabPanelComponent } from './TabPanel';
import { TabContext, TabList } from '@mui/lab';
import { styled } from '@mui/material';

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

const StyledTabList = styled(TabList)({
    borderBottom: '1px solid #E1ECFC',
    alignItems: 'flex-start !important',
})

const TabPanelStyle = {
    marginLeft: '245px', 
    marginTop: '60px',
    width:'912px'

}

describe('Tab panel tests', () => {
    test('Render two tabs and call changeHandler', () => {

        const changeHandler = jest.fn();
        render(
            <TabPanelComponent style={{}} stateHandler={changeHandler} tabData={tabData} >
                <TabContext value={tabData[0].value}>
            <StyledTabList onChange={changeHandler}>
            </StyledTabList>
            </TabContext>
            </TabPanelComponent>
            
        )

        const tabListChildren = screen.getAllByTestId(/tab-/);

        expect(tabListChildren.length).toBe(2);

        fireEvent.click(tabListChildren[1]);
        expect(changeHandler).toHaveBeenCalledTimes(1);
    })
})
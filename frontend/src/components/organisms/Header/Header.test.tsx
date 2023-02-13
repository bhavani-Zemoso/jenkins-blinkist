import React from 'react'
import { Button, styled } from '@mui/material';
import  userEvent  from '@testing-library/user-event';
import {fireEvent, render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '../../../Themes/theme';
import { Header } from './Header';
import { useState } from 'react';

describe('Header tests', () => {
    test('Render header', () => {

        const handleClick = jest.fn();
        const handleClickMock: any = (useState: any) => [useState, handleClick];
        jest.spyOn(React, 'useState').mockImplementation(handleClickMock);

        render(
            <BrowserRouter>
                <Header>
                </Header>
            </BrowserRouter>
        );

        const explore = screen.getByTestId('exploreButton');

        fireEvent.click(explore);
        expect(handleClick).toHaveBeenCalledTimes(0);
    })
})
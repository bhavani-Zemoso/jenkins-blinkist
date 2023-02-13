
import {render, screen} from '@testing-library/react'
import { SearchBar } from './SearchBar'

describe('Molecules/SearchBar', () => {
    test('render component', () => {
        render(
            <SearchBar />
        )

        expect(screen.getByPlaceholderText("Search by title or author")).toBeInTheDocument();
    })
})
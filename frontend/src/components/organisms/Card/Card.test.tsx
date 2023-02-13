
import {screen, render} from '@testing-library/react'
import { CardComponent } from './Card'

const bookProps = {
    image: 'https://i.ibb.co/WgMd7j0/9.png',
    bookName: 'DropShipping',
    author: 'James Moore',
    time: '12-minute read',
    noOfReads: '',
    readStatus: "",
    page: 'AllBooks',
    progress: 40
}

describe('Organisms/Card', () => {

    render(
        <CardComponent image={bookProps.image} bookName={bookProps.bookName} author={bookProps.image} time={bookProps.time} noOfReads={bookProps.noOfReads}
            readStatus={bookProps.readStatus} page={bookProps.page} progress={bookProps.progress} />
    )

    test("check image", () => {
        render(
            <CardComponent image={bookProps.image} bookName={bookProps.bookName} author={bookProps.image} time={bookProps.time} noOfReads={bookProps.noOfReads}
                readStatus={bookProps.readStatus} page={bookProps.page} progress={bookProps.progress} />
        )
    
        const element = screen.getAllByAltText('DropShipping');
        expect(element).toHaveLength(2);

    })

    test("check timeToRead", () => {
        render(
            <CardComponent image={bookProps.image} bookName={bookProps.bookName} author={bookProps.image} time={bookProps.time} noOfReads={bookProps.noOfReads}
                readStatus={bookProps.readStatus} page={bookProps.page} progress={bookProps.progress} />
        )
        const timeElement = screen.getByTestId('TimeToRead')
        expect(timeElement).toBeInTheDocument();
    })

    test("check addtolibrarybutton", () => {
        render(
            <CardComponent image={bookProps.image} bookName={bookProps.bookName} author={bookProps.image} time={bookProps.time} noOfReads={bookProps.noOfReads}
                readStatus={bookProps.readStatus} page={bookProps.page} progress={bookProps.progress} />
        )

        const button = screen.getByTestId('AddIcon')
        expect(button).toBeInTheDocument();
    })
})


import { render, screen, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', () => {
    render(<BoxList />)
});

it('matches snapshot', () => {
    const {asFragment} = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot()
});

it('adds a box', () => {
    render(<BoxList />)
    const colorInput = screen.getByLabelText('Color')
    const widthInput = screen.getByLabelText('Width')
    const heightInput = screen.getByLabelText('Height')
    const addBtn = screen.queryByText('Add Box')
    let boxBtn = screen.queryByText('X')
    expect(boxBtn).not.toBeInTheDocument()

    fireEvent.change(colorInput, {target: {value: 'red'}})
    fireEvent.change(widthInput, {target: {value: 2}})
    fireEvent.change(heightInput, {target: {value: 2}})
    fireEvent.click(addBtn)

    boxBtn = screen.queryByText('X')
    expect(boxBtn).toBeInTheDocument()
});

it('deletes a box', () => {
    render(<BoxList />)
    const colorInput = screen.getByLabelText('Color')
    const widthInput = screen.getByLabelText('Width')
    const heightInput = screen.getByLabelText('Height')
    const addBtn = screen.queryByText('Add Box')
    let boxBtn = screen.queryByText('X')
    expect(boxBtn).not.toBeInTheDocument()

    fireEvent.change(colorInput, {target: {value: 'red'}})
    fireEvent.change(widthInput, {target: {value: 2}})
    fireEvent.change(heightInput, {target: {value: 2}})
    fireEvent.click(addBtn)

    boxBtn = screen.queryByText('X')
    expect(boxBtn).toBeInTheDocument()

    fireEvent.click(boxBtn)
    boxBtn = screen.queryByText('X')
    expect(boxBtn).not.toBeInTheDocument()
});
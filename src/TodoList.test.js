import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

it('renders without crashing', () => {
    render(<TodoList />)
});

it('matches snapshot', () => {
    const {asFragment} = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot()
});

it('adds a todo', () => {
    render(<TodoList />)
    const input = screen.getByLabelText('Todo')
    const addBtn = screen.queryByText('Add Todo')
    let todoBtn = screen.queryByText('X')
    expect(todoBtn).not.toBeInTheDocument()

    fireEvent.change(input, {target: {value: 'Test'}})
    fireEvent.click(addBtn)

    todoBtn = screen.queryByText('X')
    expect(todoBtn).toBeInTheDocument()
})

it('deletes a todo', () => {
    render(<TodoList />)
    const input = screen.getByLabelText('Todo')
    const addBtn = screen.queryByText('Add Todo')
    let todoBtn = screen.queryByText('X')
    expect(todoBtn).not.toBeInTheDocument()

    fireEvent.change(input, {target: {value: 'Test'}})
    fireEvent.click(addBtn)

    todoBtn = screen.queryByText('X')
    expect(todoBtn).toBeInTheDocument()

    fireEvent.click(todoBtn)
    expect(todoBtn).not.toBeInTheDocument()
})
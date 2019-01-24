import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../action';

let AddTodo = ({dispatch}) => {
    let input
    return (
        <header className="header">
            <h1>Todos</h1>
            <input onKeyDown={(e) => {
                    if (input.value && e.keyCode === 13) {
                        dispatch(addTodo(input.value))
                        input.value = ''
                    }
                    }}
                    ref={node => input = node}
            className="new-todo" placeholder="What's Next？" autoFocus />
        </header>
    )
};

AddTodo = connect()(AddTodo)

export default AddTodo;
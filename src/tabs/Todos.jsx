import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
  };
  addTodo = newTodo => {
    const todo = { id: nanoid(), text: newTodo.search };
    this.setState(prevState => {
      return {
        todos: [...prevState.todos, todo],
      };
    });
    // console.log('addTodo', newTodo);
  };
  render() {
    console.log(this.state.todos);
    return (
      <div>
        <SearchForm addTodo={this.addTodo} />
      </div>
    );
  }
}

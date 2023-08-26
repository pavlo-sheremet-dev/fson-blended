import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
  };

  addTodo = data => {
    const todo = {
      todoText: data.search,
      id: nanoid(),
    };
    this.setState(prevState => {
      return { todos: [...prevState.todos, todo] };
    });
  };

  render() {
    console.log(this.state.todos);
    return (
      <>
        <SearchForm onSubmit={this.addTodo} />

        {JSON.stringify(this.state.todos)}
      </>
    );
  }
}

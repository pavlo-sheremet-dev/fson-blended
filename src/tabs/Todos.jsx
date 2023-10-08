import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
  };

  componentDidUpdate(_, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    if (!parsedTodos) return;

    this.setState({ todos: parsedTodos });
  }

  handleDeleteToDo = id => {
    this.setState(prev => ({
      todos: prev.todos.filter(todo => todo.id !== id),
    }));
  };

  addTodo = newTodo => {
    const todo = {
      id: nanoid(),
      text: newTodo.search,
    };
    this.setState(prevState => {
      return {
        todos: [...prevState.todos, todo],
      };
    });
    // console.log('addTodo', newTodo);
  };

  render() {
    // console.log(this.state.todos);
    return (
      <div>
        <SearchForm addTodo={this.addTodo} />
        <Grid>
          {this.state.todos.map((todo, index) => (
            <GridItem key={todo.id}>
              {' '}
              <Todo
                text={todo.text}
                index={index + 1}
                handleDelete={this.handleDeleteToDo}
                id={todo.id}
              />
            </GridItem>
          ))}
        </Grid>
      </div>
    );
  }
}

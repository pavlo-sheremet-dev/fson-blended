import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = { search: '' };
  onChange = event => {
    this.setState({ search: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ search: '' });
    // console.log(this.state);
  };
  render() {
    return (
      <SearchFormStyled onSubmit={this.onSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
          value={this.state.search}
          onChange={this.onChange}
        />
      </SearchFormStyled>
    );
  }
}

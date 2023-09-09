import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    search: '',

  }

  handleChange = (ev) => {
    this.setState({search:ev.target.value})
  }

  handleSubmit = (ev) =>{
    ev.preventDefault();
    this.props.onSubmit({...this.state});
    // console.log(this.state)
  }

  render() {
    return (
    <SearchFormStyled onSubmit={this.handleSubmit}>
    <FormBtn type="submit">
      <FiSearch size="16px" />
    </FormBtn>
    <InputSearch value={this.state.search} onChange={this.handleChange}
      placeholder="What do you want to write?"
      name="search"
      required
      autoFocus
    />
  </SearchFormStyled>
  )
  }
}

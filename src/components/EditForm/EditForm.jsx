import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import { SearchFormStyled, FormBtn, InputSearch } from 'components';
import { BtnEdit } from './EditForm.styled';

export const EditForm = ({ selectedTodo, editTodos, closeForm }) => {
  const handleSubmit = e => {
    e.preventDefault();
    editTodos({ ...selectedTodo, text: e.target.search.value });
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <RiSaveLine size="16px" />
      </FormBtn>
      <BtnEdit type="button" onClick={closeForm}>
        <MdOutlineCancel size="16px" />
      </BtnEdit>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        defaultValue={selectedTodo.text}
      />
    </SearchFormStyled>
  );
};

import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import { SearchFormStyled, FormBtn, InputSearch } from 'components';
import { BtnEdit } from './EditForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelected, editTodos } from 'redux/todosSlice';
import { selecSelectTodo } from 'redux/selectors';

export const EditForm = () => {
  const selectedTodo = useSelector(selecSelectTodo);

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editTodos({ ...selectedTodo, text: e.target.search.value }));
  };
  const clearForm = () => dispatch(clearSelected());

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <RiSaveLine size="16px" />
      </FormBtn>
      <BtnEdit type="button" onClick={clearForm}>
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

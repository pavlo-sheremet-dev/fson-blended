import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const Todo = ({ textTodo, todoNumber, deleteTodo, id, selectTodo }) => {
  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{todoNumber}
      </Text>
      <Text>{textTodo}</Text>
      <DeleteButton type="button" onClick={() => deleteTodo(id)}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
      <EditButton onClick={() => selectTodo(id)}>
        <RiEdit2Line size={24} />
      </EditButton>
    </TodoWrapper>
  );
};

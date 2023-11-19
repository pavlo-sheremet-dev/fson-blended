import { Text } from 'components';
import { TodoWrapper, DeleteButton } from './Todo.styled';
import { RiDeleteBinLine } from 'react-icons/ri';

export const Todo = ({ text, elIndex, onDelete, id }) => {
  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{elIndex}
      </Text>
      <Text>{text}</Text>
      <DeleteButton type="button" onClick={() => onDelete(id)}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
    </TodoWrapper>
  );
};

import { Text } from 'components';
import { TodoWrapper, DeleteButton } from './Todo.styled';
import { RiDeleteBinLine } from 'react-icons/ri';

import { useArrayHandler } from 'Providers/MobileMenuProvider';

export const Todo = ({ text, index, id }) => {
  const { removeItem } = useArrayHandler();
  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{index}
      </Text>
      <Text>{text}</Text>
      <DeleteButton type="button" onClick={() => removeItem(id)}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
    </TodoWrapper>
  );
};

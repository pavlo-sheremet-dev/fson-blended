import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';
import { AiFillHome } from 'react-icons/ai';

export const StatisticItem = ({title, total, Icon}) => {
  return (
    <StatisticBox>
      {/* <AiFillHome color="#2196F3" size="16px" /> */}
      <Icon color="black" size="26px" />
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};

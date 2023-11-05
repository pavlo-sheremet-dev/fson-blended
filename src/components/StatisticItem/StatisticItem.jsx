import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({ stats, icon: Icon }) => {
  return (
    <StatisticBox>
      <Icon />
      <StatisticCounter>{stats.total}</StatisticCounter>
      <StatisticText>{stats.title}</StatisticText>
    </StatisticBox>
  );
};

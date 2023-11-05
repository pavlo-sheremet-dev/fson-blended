import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

<<<<<<< Updated upstream
export const StatisticItem = ({ stats, icon: Icon }) => {
  return (
    <StatisticBox>
      <Icon />
      <StatisticCounter>{stats.total}</StatisticCounter>
      <StatisticText>{stats.title}</StatisticText>
    </StatisticBox>
  );
=======
export const StatisticItem = () => {
  <StatisticBox>
    {/* Тут має бути іконка */}
    <StatisticCounter>3275</StatisticCounter>
    <StatisticText>Registered Members</StatisticText>
  </StatisticBox>
>>>>>>> Stashed changes
};

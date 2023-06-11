import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const icons = {
  1: FaRegThumbsUp,
  2: MdPeople,
  3: MdOutlineProductionQuantityLimits,
  4: GiTreeDoor,
};

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <StatisticTitle>{title}</StatisticTitle>

      <StatisticsList>
        {stats.map(item => (
          <StatisticItem
            key={item.id}
            total={item.total}
            title={item.title}
            Icon={icons[item.id]}
          />
        ))}
      </StatisticsList>
    </>
  );
};

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

export const Statistics = ({ data }) => {
  console.log(data);
  return (
    <>
      <StatisticTitle>Main Statistics</StatisticTitle>

      <StatisticsList>
        {data.map(({ id, title, total }) => {
          return (
            <StatisticItem
              key={id}
              title={title}
              total={total}
              icon={icons[id]}
            />
          );
        })}
      </StatisticsList>
    </>
  );
};

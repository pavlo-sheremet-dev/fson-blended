import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { AiFillInfoCircle } from 'react-icons/ai';

const iconsObj = {
  1: FaRegThumbsUp,
  2: MdPeople,
  3: MdOutlineProductionQuantityLimits,
  4: GiTreeDoor,
  default: AiFillInfoCircle,
};

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {stats.map(({ id, title, total }) => {
          return <StatisticItem key={id} title={title} total={total} Icon = {iconsObj[id] ?? iconsObj.default} />;
        })}
      </StatisticsList>
    </>
  );
};

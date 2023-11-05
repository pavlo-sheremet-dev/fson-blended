import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

<<<<<<< Updated upstream
const icons = {
  1: FaRegThumbsUp,
  2: MdPeople,
  3: MdOutlineProductionQuantityLimits,
  4: GiTreeDoor,
};
=======
import React from 'react';
>>>>>>> Stashed changes

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
<<<<<<< Updated upstream
        {stats.map(item => (
          <StatisticItem key={item.id} stats={item} icon={icons[item.id]} />
        ))}
      </StatisticsList>
=======
    </StatisticsList>
>>>>>>> Stashed changes
    </>
  );
};

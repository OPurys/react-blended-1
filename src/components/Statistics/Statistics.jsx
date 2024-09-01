import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const icons = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export const Statistics = ({ stats }) => {
  return (
    <>
      <h3 className={style.title}>Main Statistics</h3>
      <ul className={style.list}>
        {stats.map(({ id, title, total }, index) => (
          <li key={id} className={style.item}>
            <StatisticsItem icon={icons[index]} title={title} total={total} />
          </li>
        ))}
      </ul>
    </>
  );
};

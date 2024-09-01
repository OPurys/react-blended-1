import { IconContext } from 'react-icons';
import style from '../StatisticsItem/Statistics.module.css';

export const StatisticsItem = ({ total, title, icon }) => {
  return (
    <>
      <IconContext.Provider value={{ color: 'blue', size: '30px' }}>
        {icon}
      </IconContext.Provider>
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

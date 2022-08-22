import React from 'react';
import { AutoCenter, Empty } from 'antd-mobile';
import { useSelector } from 'react-redux';
import RegioinCard from './RegionCard';
import styles from '../scss/Regions.module.scss';

function Liked() {
  const liked = useSelector((state) => state.dustSlice).liked;
  console.log(liked);
  return (
    <div className={styles.allRegions}>
      {liked.length ? (
        <div className={styles.cardContainer}>
          {liked.map((card) => (
            <RegioinCard
              key={card.stationName}
              dustdata={card}
              fillstar={true}
            />
          ))}
        </div>
      ) : (
        <AutoCenter>
          <Empty
            style={{ padding: '64px 0' }}
            imageStyle={{ width: 128 }}
            description="즐겨찾기가 없습니다."
          />
        </AutoCenter>
      )}
    </div>
  );
}

export default Liked;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDust } from '../redux/dustSlice';
import { Skeleton } from 'antd-mobile';
import styles from '../scss/Regions.module.scss';
import RegioinCard from './RegionCard';

function AllRegions() {
  const data = useSelector((state) => state.dustSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    data.body.totalCount === 0 && dispatch(getDust());
  }, [dispatch]);

  return (
    <div>
      {data ? (
        <div className={styles.allRegions}>
          <div className={styles.totalCount}>
            조회 결과: {data.body.totalCount} 건
          </div>
          <div className={styles.cardContainer}>
            {data.body.items.map((item) => (
              <RegioinCard key={item.stationName} dustdata={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.skeletonContainer}>
          <Skeleton animated className={styles.customSkeleton} />
          <Skeleton animated className={styles.customSkeleton} />
          <Skeleton animated className={styles.customSkeleton} />
        </div>
      )}
    </div>
  );
}

export default React.memo(AllRegions);

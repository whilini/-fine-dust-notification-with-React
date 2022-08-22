import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDust, getSidoName } from '../redux/dustSlice';
import { Skeleton, Cascader, Button, AutoCenter } from 'antd-mobile';
import { alloptions } from '../constants/regionSelectOption';
import styles from '../scss/Regions.module.scss';
import RegioinCard from './RegionCard';

function AllRegions() {
  const data = useSelector((state) => state.dustSlice);
  const dispatch = useDispatch();
  const [value, setValue] = useState(['서울']);
  useEffect(() => {
    dispatch(getSidoName(value[0]));
  }, [value]);

  useEffect(() => {
    dispatch(getDust());
  }, [value]);

  const [visible, setVisible] = useState(false);

  const darkmode = data.darkmode;
  const sidoSelect = () => {
    setVisible(true);
    setTimeout(() => {
      const popupBodyEl = document.getElementsByClassName('adm-popup-body')[0];
      if (darkmode) {
        popupBodyEl.setAttribute(
          'style',
          '--adm-color-background: #262626; background-color: #262626; color: #fff; --adm-color-border: #434343',
        );
      } else {
        popupBodyEl.setAttribute('style', '--adm-color-background: #fff;');
      }
    }, 0);
  };

  return (
    <div>
      <AutoCenter>
        <Button
          style={{ marginBottom: '10px' }}
          color="primary"
          fill="solid"
          onClick={sidoSelect}
        >
          시·도 선택
        </Button>
      </AutoCenter>
      <Cascader
        options={alloptions}
        value={value}
        visible={visible}
        cancelText="취소"
        confirmText="선택"
        placeholder="지역 선택"
        style={{ width: 375, margin: '0 auto' }}
        onConfirm={(val, extend) => {
          setValue(val);
          console.log('sido', val, extend.items);
        }}
        onClose={() => {
          setVisible(false);
        }}
      />
      {!data.loading ? (
        <div className={styles.allRegions}>
          <div className={styles.totalCount}>
            조회 결과: {data.body.totalCount} 건
          </div>
          <div className={styles.cardContainer}>
            {data.body.totalCount !== 0 &&
              data.body.items.map((item) => (
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

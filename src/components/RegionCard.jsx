import React, { useState } from 'react';
import { StarOutline, StarFill } from 'antd-mobile-icons';
import styles from '../scss/Regions.module.scss';
import { useDispatch } from 'react-redux';
import { addLiked, deleteLiked } from '../redux/dustSlice';

function RegioinCard({ dustdata, fillstar }) {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  const addLike = () => {
    setLiked(!liked);
    dispatch(addLiked(dustdata));
  };
  const deleteLike = () => {
    setLiked(!liked);
    dispatch(deleteLiked(stationName));
  };

  const stationName = dustdata.stationName;
  const sidoName = dustdata.sidoName;
  const pm10Grade = Number(dustdata.pm10Grade);
  const finedustGrade = ['좋음', '보통', '한때 나쁨', '나쁨', '매우 나쁨'];

  const finedustGradeColor = {
    1: '#1890ff',
    2: '#52c41a',
    3: '#fadb14',
    4: '#fa8c16',
    5: '#f5222d',
  };
  const backgroundColor = finedustGradeColor[pm10Grade];
  const color = finedustGradeColor[pm10Grade];

  const finedustValue = dustdata.pm10Value;
  const dataTime = dustdata.dataTime && dustdata.dataTime.split(' ');
  if (!dataTime) return;
  const date = dataTime[0];
  const ymd = date ? date.split('-') : 'no data';
  const year = ymd[0] + '년 ';
  const month = ymd[1][0] === '0' ? ymd[1][1] + '월 ' : ymd[1] + '월 ';
  const day = ymd[2][0] === '0' ? ymd[2][1] + '일 ' : ymd[2] + '일 ';
  const time = dataTime[1].replace(':', '시 ') + '분';
  const measurementDate = year + month + day + ' ' + time;

  return (
    <div style={{ backgroundColor }} className={styles.regionCard}>
      <div className={styles.stationTitleGroup}>
        <div className={styles.stationName}>
          {stationName}
          <span>{sidoName}</span>
        </div>
      </div>
      <div className={styles.finedustGrade}>
        <div style={{ color }}>
          {pm10Grade ? finedustGrade[pm10Grade - 1] : 'no data'}
        </div>
      </div>
      <div className={styles.detailContainer}>
        <div className={styles.finedustValue}>
          미세먼지 수치: {finedustValue}
        </div>
        <div className={styles.measurementDate}>
          {measurementDate ? measurementDate : 'no data'} 기준
        </div>
      </div>
      <div className={styles.liked}>
        {fillstar || liked ? (
          <div onClick={deleteLike}>
            <StarFill />
          </div>
        ) : (
          <div onClick={addLike}>
            <StarOutline />
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(RegioinCard);

import React from 'react';
import { StarOutline } from 'antd-mobile-icons';
import styles from '../scss/Regions.module.scss';

function RegioinCard({ dustdata }) {
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
  const dataTime = dustdata.dataTime.split(' ');
  const date = dataTime[0];
  const ymd = date.split('-');
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
          {finedustGrade ? finedustGrade[pm10Grade - 1] : 'no data'}
        </div>
      </div>
      <div className={styles.detailContainer}>
        <div className={styles.finedustValue}>
          미세먼지 수치: {finedustValue}
        </div>
        <div className={styles.measurementDate}>{measurementDate} 기준</div>
      </div>
      <div className={styles.liked}>
        <StarOutline />
      </div>
    </div>
  );
}

export default RegioinCard;

import React, { useEffect, useState, useRef } from 'react';
import { Cascader, Button, Empty, AutoCenter } from 'antd-mobile';
import { myoptions } from '../constants/regionSelectOption';
import { useDispatch, useSelector } from 'react-redux';
import { getSidoName, getDust } from '../redux/dustSlice';
import '../scss/App.scss';
import styles from '../scss/Regions.module.scss';
import RegionCard from './RegionCard';

function MyRegion() {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.dustSlice);
  const data = res.body.items;
  const [value, setValue] = useState(['서울', '광진구']);
  let response = [];
  let detailOptions = [];

  useEffect(() => {
    dispatch(getSidoName(value[0]));
  }, [value]);
  useEffect(() => {
    dispatch(getDust());
  }, [value]);

  useEffect(() => {
    if (!res.loading) {
      data.map((item) => {
        response = [...response, item];
      });
      response.map((item) => {
        detailOptions.push({
          label: item.stationName,
          value: item.stationName,
        });
      });
      myoptions.map((item) => {
        if (item.value === value[0]) {
          item.children = detailOptions;
        }
      });
    }
  }, [data]);

  const [selected, setSelected] = useState({});
  const selectRegion = () => {
    data.map((item) => {
      if (item.stationName === value[1]) {
        setSelected(item);
      }
    });
  };
  useEffect(() => {
    selectRegion();
  }, [value]);

  const [visible, setVisible] = useState(false);

  const darkmode = res.darkmode;
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
        <Button color="primary" onClick={sidoSelect}>
          상세 지역
        </Button>
      </AutoCenter>

      <div>
        <Cascader
          options={myoptions}
          value={value}
          visible={visible}
          cancelText="취소"
          confirmText="선택"
          placeholder="지역 선택"
          style={{ width: 375, margin: '0 auto' }}
          onSelect={(v) => {
            setValue(v);
          }}
          onConfirm={(val, extend) => {
            setValue(val);
            selectRegion(val[0]);
          }}
          onClose={() => {
            setVisible(false);
          }}
        />
      </div>

      <div className="selectedRegion"></div>
      {selectRegion !== {} ? (
        <div className={styles.allRegions}>
          <div className={styles.cardContainer}>
            <RegionCard dustdata={selected} />
          </div>
        </div>
      ) : (
        <Empty
          style={{ padding: '64px 0' }}
          imageStyle={{ width: 128 }}
          description="지역을 선택해주세요."
        />
      )}
    </div>
  );
}

export default MyRegion;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllRegions from './components/AllRegions';
import FooterBar from './components/FooterBar';
import Header from './components/Header';
import Liked from './components/Liked';
import MyRegion from './components/MyRegion';
import styles from './scss/App.module.scss';
import './scss/App.scss';
import { useSelector } from 'react-redux';

function App() {
  const darkmode = useSelector((state) => state.dustSlice.darkmode);
  const appTheme = darkmode ? 'app dark' : 'app';
  return (
    <BrowserRouter>
      <div className={appTheme}>
        <div className={styles.top}>
          <Header />
        </div>
        <div className={styles.body}>
          <Routes>
            <Route path="/" element={<AllRegions />}></Route>
            <Route path="myregion" element={<MyRegion />}></Route>
            <Route path="liked" element={<Liked />}></Route>
          </Routes>
        </div>
        <div className={styles.bottom}>
          <FooterBar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default React.memo(App);

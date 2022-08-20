import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllRegions from './components/AllRegions';
import FooterBar from './components/FooterBar';
import Header from './components/Header';
import Liked from './components/Liked';
import MyRegion from './components/MyRegion';
import styles from './scss/App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
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

export default App;

import { TabBar } from 'antd-mobile';
import {
  GlobalOutline,
  EnvironmentOutline,
  StarOutline,
} from 'antd-mobile-icons';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function FooterBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value) => {
    navigate(`${value}`);
  };

  const tabs = [
    {
      key: '/',
      title: '전체 시도 보기',
      icon: <GlobalOutline />,
    },
    {
      key: '/myregion',
      title: '내 지역',
      icon: <EnvironmentOutline />,
    },
    {
      key: '/liked',
      title: '즐겨찾기',
      icon: <StarOutline />,
    },
  ];
  return (
    <div>
      <nav>
        <TabBar
          activeKey={pathname}
          onChange={(value) => setRouteActive(value)}
        >
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </nav>
    </div>
  );
}

export default FooterBar;

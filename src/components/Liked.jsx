import React from 'react';
import { Empty } from 'antd-mobile';

function Liked() {
  return (
    <div>
      <Empty
        style={{ padding: '64px 0' }}
        imageStyle={{ width: 128 }}
        description="즐겨찾기가 없습니다."
      />
    </div>
  );
}

export default Liked;

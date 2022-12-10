import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Table from './Board/Table';
import Pagination from './Board/Pagination';

const Board = ({ posts, limit }) => {
  const [current, setCurrent] = useState(0);

  const onTogglePage = (index) => {
    setCurrent(index);
  };

  const pages = Math.ceil(posts.length / limit);
  return (
    <BoardBlock>
      <Table posts={posts} current={current} limit={limit} />
      <Pagination pages={pages} onTogglePage={onTogglePage} current={current} />
    </BoardBlock>
  );
};

const BoardBlock = styled.div``;

export default Board;

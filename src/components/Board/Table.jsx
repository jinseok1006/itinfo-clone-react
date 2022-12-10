import styled from 'styled-components';

import Item from './Item';

const Table = ({ posts, current, limit }) => {
  const offset = current * limit;

  const currentPosts = () => {
    if (offset + limit >= posts.length) {
      return posts.slice(offset);
    } else {
      return posts.slice(offset, offset + limit);
    }
  };

  return (
    <TableBlock>
      {currentPosts().map((post, i) => (
        <Item key={i} post={post} />
      ))}
    </TableBlock>
  );
};

const TableBlock = styled.div`
  border: 1px solid #adb5bd;
  border-left: none;
  border-right: none;
`;

export default Table;

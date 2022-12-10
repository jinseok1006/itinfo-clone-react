import styled from 'styled-components';
import { HiPlus } from 'react-icons/hi';
import { getDateString } from './utils';

import { Link } from 'react-router-dom';

const Table = ({ title, contents, more }) => {
  return (
    <TableBlock>
      <TableHead>
        <h3>{title}</h3>
        <MoreButton>
          <Link to={more} style={{ color: 'black' }}>
            <HiPlus size="20" />
          </Link>
        </MoreButton>
      </TableHead>

      <TableBody>
        {contents.map((content, i) => (
          <TableItem key={i}>
            <TableItemTitle>
              <Link to={'/'}>{content.title}</Link>
            </TableItemTitle>
            <TableItemDate>{getDateString(content.date)}</TableItemDate>
          </TableItem>
        ))}
      </TableBody>
    </TableBlock>
  );
};

const MoreButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: #868e96;
`;

const TableBlock = styled.div`
  padding: 1rem;
`;
const TableHead = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0 0.5rem;
`;

const TableBody = styled.ol`
  border: 1px solid #868e96;
  border-left: none;
  border-right: none;
  padding: 0.5rem 0;
`;
const TableItem = styled.li`
  display: flex;
  justify-content: space-between;
  line-height: 1.5rem;
  & + & {
    border-top: 1px solid #e9ecef;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
  }

  a {
    color: #212529;
    text-decoration: none;
  }
`;
const TableItemTitle = styled.div`
  flex-basis: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const TableItemDate = styled.div`
  font-size: 0.8rem;
  color: #868e96;
`;

export default Table;

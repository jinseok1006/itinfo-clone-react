import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Pagination = ({ pages, onTogglePage, current }) => {
  return (
    <PaginationBlock>
      {Array.from({ length: pages }).map((_, i) => (
        <Button onClick={() => onTogglePage(i)} disabled={current === i}>
          {i + 1}
        </Button>
      ))}
    </PaginationBlock>
  );
};

const Button = ({ children, ...rest }) => {
  return <ButtonBlock {...rest}>{children}</ButtonBlock>;
};
const ButtonBlock = styled.button`
  padding: 0.5rem;
  background: #fff;
  border: 1px solid #ced4da;
  outline: none;

  &:disabled {
    color: #ced4da;
  }
  & + & {
    margin-left: 0.5rem;
  }
`;

const PaginationBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export default Pagination;
